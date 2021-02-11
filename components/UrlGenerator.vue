<template>
    <ul class="space-y-4">
        <li v-for="(partial, key) in generationConfig" :key="key">
            <header
                role="button"
                class="bg-white p-4 font-bold text-gray-700 cursor-pointer focus:outline-none"
                :class="{
                    'bg-opacity-90 rounded-xl hover:bg-opacity-100': !partial.open,
                    'rounded-t-xl': partial.open
                }"
                @click="partial.open = !partial.open"
            >
                {{ key }}
            </header>
            <div v-if="partial.open" class="bg-white p-4 rounded-b-xl space-y-4">
                <div
                    v-for="(field, fieldName) in partial.fields"
                    :key="fieldName"
                    :class="{
                        'grid grid-cols-2': !['switch', 'tailwindcss'].includes(field.type)
                    }"
                >
                    <div>
                        <label :for="fieldName" class="flex justify-start items-center">
                            <input
                                v-if="field.type === 'switch'"
                                type="checkbox"
                                :id="fieldName"
                                class="h-6 w-6 text-teal-600 mr-4" @change="didUpdateField(fieldName, $event)"
                                :checked="customConfig[fieldName]"
                            >
                            {{ field.name }}
                        </label>
                        <small v-if="field.help" class="text-xs text-gray-600 mt-2">{{ field.help }}</small>
                    </div>
                    <div v-if="!['switch'].includes(field.type)">
                        <input
                            v-if="!field.type || ['text', 'number'].includes(field.type)"
                            class="block w-full border border-gray-300 rounded-lg px-4 py-2"
                            :type="field.type || 'text'"
                            :id="fieldName"
                            :value="customConfig[fieldName]"
                            :min="field.min"
                            :max="field.max"
                            @change="didUpdateField(fieldName, $event)"
                        >
                        <v-select
                            v-else-if="field.type === 'select'"
                            :options="field.options"
                            :value="customConfig[fieldName]"
                            @input="didUpdateField(fieldName, $event)"
                        ></v-select>
                        <div v-else-if="field.type === 'tailwindcss'">
                            <ul>
                                <li v-for="(tw, twKey) in tailwindOptions" :key="fieldName + '-' + twKey">
                                    <label :for="fieldName + '-' + twKey">{{ twKey }}</label>
                                    <v-select
                                        :multiple="tw.multiple || false"
                                        :taggable="tw.taggable || false"
                                        :options="tw.options"
                                        @input="didUpdateField(fieldName, $event)"
                                    >
                                        <template v-slot:option="option">
                                            <span v-if="tw.type === 'text'" :class="[option.label, tw.render].filter(x => !!x).join(' ')">Aa</span>
                                            <span v-else-if="tw.type === 'box'" class="inline-block h-6 w-6" :class="[option.label, tw.render].filter(x => !!x).join(' ')"></span>
                                            <span class="inline-block ml-2">{{ option.label }}</span>
                                        </template>
                                    </v-select>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
import Vue from 'vue'

export default {
    name: 'url-generator',
    props: {
        config: {
            type: Object,
            required: true
        }
    },
    mounted () {
        this.notify()
    },
    data () {
        return {
            customConfig: JSON.parse(JSON.stringify(this.config)),
            tailwind: {
                colors: ['blueGray', 'coolGray', 'gray', 'trueGray', 'warmGray', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'lightBlue', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'],
                colorShades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
                opacities: [0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100],
                weights: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
                textSize: ['xs', 'sm', 'md', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
                heights: ['0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '5', '6', '7', '8', '9', '10', '11', '12', '14', '16', '20', '24', '28', '32', '36', '40', '44', '48', '52', '56', '60', '64', '72', '80', '96', 'auto', 'px', '1/2', '1/3', '2/3', '1/4', '2/4', '3/4', '1/5', '2/5', '3/5', '4/5', '1/6', '2/6', '3/6', '4/6', '5/6', 'full', 'screen'],
                widths: ['0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '5', '6', '7', '8', '9', '10', '11', '12', '14', '16', '20', '24', '28', '32', '36', '40', '44', '48', '52', '56', '60', '64', '72', '80', '96', 'auto', 'px', '1/2', '1/3', '2/3', '1/4', '2/4', '3/4', '1/5', '2/5', '3/5', '4/5', '1/6', '2/6', '3/6', '4/6', '5/6', '1/12', '2/12', '3/12', '4/12', '5/12', '6/12', '7/12', '8/12', '9/12', '10/12', '11/12', 'full', 'screen', 'min', 'max'],
                borderWidths: ['border-0', 'border-2', 'border-4', 'border-8', 'border', 'border-t-0', 'border-r-0', 'border-b-0', 'border-l-0', 'border-t-2', 'border-r-2', 'border-b-2', 'border-l-2', 'border-t-4', 'border-r-4', 'border-b-4', 'border-l-4', 'border-t-8', 'border-r-8', 'border-b-8', 'border-l-8', 'border-t', 'border-r', 'border-b', 'border-l'],
                sizing: ['-0', '-0.5', '-1', '-1.5', '-2', '-2.5', '-3', '-3.5', '-4', '-5', '-6', '-7', '-8', '-9', '-10', '-11', '-12', '-14', '-16', '-20', '-24', '-28', '-32', '-36', '-40', '-44', '-48', '-52', '-56', '-60', '-64', '-72', '-80', '-96', '-px', 'y-0', 'y-0.5', 'y-1', 'y-1.5', 'y-2', 'y-2.5', 'y-3', 'y-3.5', 'y-4', 'y-5', 'y-6', 'y-7', 'y-8', 'y-9', 'y-10', 'y-11', 'y-12', 'y-14', 'y-16', 'y-20', 'y-24', 'y-28', 'y-32', 'y-36', 'y-40', 'y-44', 'y-48', 'y-52', 'y-56', 'y-60', 'y-64', 'y-72', 'y-80', 'y-96', 'y-px', 'x-0', 'x-0.5', 'x-1', 'x-1.5', 'x-2', 'x-2.5', 'x-3', 'x-3.5', 'x-4', 'x-5', 'x-6', 'x-7', 'x-8', 'x-9', 'x-10', 'x-11', 'x-12', 'x-14', 'x-16', 'x-20', 'x-24', 'x-28', 'x-32', 'x-36', 'x-40', 'x-44', 'x-48', 'x-52', 'x-56', 'x-60', 'x-64', 'x-72', 'x-80', 'x-96', 'x-px', 't-0', 't-0.5', 't-1', 't-1.5', 't-2', 't-2.5', 't-3', 't-3.5', 't-4', 't-5', 't-6', 't-7', 't-8', 't-9', 't-10', 't-11', 't-12', 't-14', 't-16', 't-20', 't-24', 't-28', 't-32', 't-36', 't-40', 't-44', 't-48', 't-52', 't-56', 't-60', 't-64', 't-72', 't-80', 't-96', 't-px', 'r-0', 'r-0.5', 'r-1', 'r-1.5', 'r-2', 'r-2.5', 'r-3', 'r-3.5', 'r-4', 'r-5', 'r-6', 'r-7', 'r-8', 'r-9', 'r-10', 'r-11', 'r-12', 'r-14', 'r-16', 'r-20', 'r-24', 'r-28', 'r-32', 'r-36', 'r-40', 'r-44', 'r-48', 'r-52', 'r-56', 'r-60', 'r-64', 'r-72', 'r-80', 'r-96', 'r-px', 'b-0', 'b-0.5', 'b-1', 'b-1.5', 'b-2', 'b-2.5', 'b-3', 'b-3.5', 'b-4', 'b-5', 'b-6', 'b-7', 'b-8', 'b-9', 'b-10', 'b-11', 'b-12', 'b-14', 'b-16', 'b-20', 'b-24', 'b-28', 'b-32', 'b-36', 'b-40', 'b-44', 'b-48', 'b-52', 'b-56', 'b-60', 'b-64', 'b-72', 'b-80', 'b-96', 'b-px', 'l-0', 'l-0.5', 'l-1', 'l-1.5', 'l-2', 'l-2.5', 'l-3', 'l-3.5', 'l-4', 'l-5', 'l-6', 'l-7', 'l-8', 'l-9', 'l-10', 'l-11', 'l-12', 'l-14', 'l-16', 'l-20', 'l-24', 'l-28', 'l-32', 'l-36', 'l-40', 'l-44', 'l-48', 'l-52', 'l-56', 'l-60', 'l-64', 'l-72', 'l-80', 'l-96', 'l-px']
            },
            generationConfig: {
                'Font Family': {
                    open: false,
                    fields: {
                        baseFontSize: {
                            name: 'Base font size (px)',
                            help: 'In TailwindCSS, sizes are based on the base font size (rem).',
                            type: 'number',
                            required: true,
                            min: 14,
                            max: 32
                        },
                        fontFamily: {
                            name: 'Font Family name',
                            help: 'You can use any name from Google Fonts, but we\'ve only added a few to this list :-)',
                            type: 'select',
                            required: false,
                            options: ['Roboto', 'Montserrat']
                        }
                    }
                },
                'Title': {
                    open: false,
                    fields: {
                        title: {
                            name: 'Text'
                        },
                        titleFontFamily: {
                            name: 'Font Family name',
                            help: 'You can use any name from Google Fonts, but we\'ve only added a few to this list :-). This value will override the global font family.',
                            type: 'select',
                            required: false,
                            options: ['Roboto', 'Montserrat']
                        },
                        titleTailwind: {
                            name: 'TailwindCSS',
                            help: 'Which CSS classes do you want to apply to the title?',
                            type: 'tailwindcss'
                        }
                    }
                },
                'Text': {
                    open: false,
                    fields: {
                        text: {
                            name: 'Text'
                        },
                        textFontFamily: {
                            name: 'Font Family name',
                            help: 'You can use any name from Google Fonts, but we\'ve only added a few to this list :-). This value will override the global font family.',
                            type: 'select',
                            required: false,
                            options: ['Roboto', 'Montserrat']
                        },
                        textTailwind: {
                            name: 'TailwindCSS',
                            help: 'Which CSS classes do you want to apply to the text?',
                            type: 'tailwindcss'
                        }
                    }
                },
                'Logo': {
                    open: false,
                    fields: {
                        logoUrl: {
                            name: 'Logo URL',
                            help: 'You can add your logo by introducing its fully-qualified URL here.',
                            type: 'url'
                        },
                        logoTailwind: {
                            name: 'TailwindCSS',
                            help: 'Which CSS classes do you want to apply to your logo?',
                            type: 'tailwindcss'
                        }
                    }
                },
                'Background': {
                    open: false,
                    fields: {
                        bgUrl: {
                            name: 'Background URL',
                            help: 'You can add a custom background image by introducing its fully-qualified URL here.',
                            type: 'url'
                        },
                        bgTailwind: {
                            name: 'TailwindCSS',
                            help: 'Which CSS classes do you want to apply to your background?',
                            type: 'tailwindcss'
                        }
                    }
                },
                'Overlay': {
                    open: false,
                    fields: {
                        overlay: {
                            name: 'Overlay',
                            help: 'This will add a new layer between the background and the text, covering the full image.',
                            type: 'switch'
                        },
                        overlayTailwind: {
                            name: 'TailwindCSS',
                            help: 'Which CSS classes do you want to apply to the overlay?',
                            type: 'tailwindcss'
                        }
                    }
                },
                'Footer': {
                    open: false,
                    fields: {
                        footer: {
                            name: 'Footer'
                        },
                        footerTailwind: {
                            name: 'TailwindCSS',
                            help: 'Which CSS classes do you want to apply to the footer?',
                            type: 'tailwindcss'
                        }
                    }
                },
                'Container': {
                    open: false,
                    fields: {
                        footerTailwind: {
                            name: 'TailwindCSS',
                            help: 'Which CSS classes do you want to apply to the text container?',
                            type: 'tailwindcss'
                        }
                    }
                }
            }
        }
    },
    watch: {
        config (newVal) {
            this.customConfig = JSON.parse(JSON.stringify(newVal))
        }
    },
    computed: {
        url () {
            const base = 'https://og.tailgraph.com/og'
            const qs = []
            for (const key in this.customConfig) {
                const value = this.modify(key, this.customConfig[key])
                if (typeof value === 'string') {
                    qs.push(`${key}=${encodeURIComponent(value)}`)
                } else if (typeof value === 'boolean' && value) {
                    qs.push(`${key}=${value ? 1 : 0}`)
                } else if (Array.isArray(value) && value.length > 0) {
                    qs.push(`${key}=${encodeURIComponent(value.join(' '))}`)
                }
            }

            qs.push('refresh=1')

            return base + '?' + qs.join('&')
        },
        tailwindOptions () {
            return {
                'Text color': {
                    type: 'text',
                    options: this.colors.map(color => `text-${color}`)
                },
                'Text align': {
                    options: ['text-left', 'text-center', 'text-right', 'text-justify']
                },
                'Font Weight': {
                    type: 'text',
                    options: this.tailwind.weights.map(weight => `font-${weight}`)
                },
                'Font Size': {
                    type: 'text',
                    options: this.tailwind.textSize.map(size => `text-${size}`)
                },
                'Background color': {
                    type: 'box',
                    options: this.colors.map(color => `bg-${color}`)
                },
                'Background opacity': {
                    type: 'box',
                    options: this.tailwind.opacities.map(opacity => `bg-opacity-${opacity}`),
                    render: 'bg-teal-600'
                },
                'Border size': {
                    type: 'box',
                    options: this.tailwind.borderWidths,
                    render: 'border-black',
                    multiple: true
                },
                'Border color': {
                    type: 'box',
                    options: this.colors.map(color => `bg-${color}`),
                    render: 'border'
                },
                'Width': {
                    type: 'size',
                    options: this.tailwind.widths
                },
                'Height': {
                    type: 'size',
                    options: this.tailwind.heights,
                },
                'Font Family': {
                    options: ['font-sans', 'font-serif', 'font-mono']
                },
                'Opacity': {
                    type: 'box',
                    options: this.tailwind.opacities.map(opacity => `opacity-${opacity}`),
                    render: 'bg-teal-600'
                },
                'Other': {
                    multiple: true,
                    taggable: true
                }
            }
        },
        colors () {
            const colors = ['white', 'black']
            for (const color of this.tailwind.colors) {
                for (const shade of this.tailwind.colorShades) {
                    colors.push(`${color}-${shade}`)
                }
            }

            return colors
        }
    },
    methods: {
        notify () {
            this.$emit('update', this.customConfig, this.url)
        },
        modify (key, value) {
            if (key === 'baseFontSize') {
                return value ? value * 2 : undefined
            }

            return value
        },
        didUpdateField(fieldName, $event) {
            if ($event && $event.target) {
                if ($event.target.type === 'checkbox') {
                    Vue.set(this.customConfig, fieldName, $event.target.checked)
                } else {
                    Vue.set(this.customConfig, fieldName, $event.target.value)
                }
                this.notify()
            } else if (typeof $event === 'string') {
                Vue.set(this.customConfig, fieldName, $event)
                this.notify()
            } else if (Array.isArray($event)) {
                Vue.set(this.customConfig, fieldName, $event)
                this.notify()
            }
        }
    }
}
</script>