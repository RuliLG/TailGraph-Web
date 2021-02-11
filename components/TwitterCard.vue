<template>
    <a :href="href" :target="newUrl ? '_blank' : undefined" :rel="newUrl ? 'noopener noreferrer' : undefined" class="block bg-white border border-gray-300 rounded-xl overflow-hidden">
        <div class="aspect-w-12 aspect-h-7 relative">
            <div v-if="imageUrl" class="absolute left-0 top-0 w-full h-full flex items-center justify-center">
                <img
                    alt="Generated OG image"
                    class="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                    :src="imageUrl"
                    :class="{
                        'opacity-0': loading,
                        'opacity-100': !loading
                    }"
                    @load="didLoadImage"
                >
                <div v-if="loading">
                    Loading...
                </div>
            </div>
            <div v-else class="absolute left-0 top-0 w-full h-full flex justify-center items-center">
                <div class="relative text-center px-4 lg:px-6">
                    <img src="~/assets/logo.svg" alt="TailGraph Logo" class="block object-contain object-center h-8 w-auto mx-auto md:h-12">
                    <div class="mt-4 md:mt-8" ref="wrapper">
                        <p class="text-lg text-black font-bold md:text-2xl" ref="title"></p>
                        <p class="hidden text-sm text-gray-700 mt-4 sm:block md:text-base" ref="description"></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-4 border-t border-gray-300">
            <p class="text-sm">{{ title }}</p>
            <p class="text-sm text-gray-500 mt-1">{{ description }}</p>
        </div>
    </a>
</template>

<script>
export default {
    name: 'twitter-card',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        href: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: false
        },
        newUrl: {
            type: String,
            required: false
        }
    },
    data () {
        return {
            interval: null,
            titleInfo: {
                chars: 0,
                step: 2,
                completed: false
            },
            descriptionInfo: {
                chars: 0,
                step: 2,
                completed: false
            },
            loading: false
        }
    },
    mounted () {
        if (!this.imageUrl) {
            this.interval = setInterval(() => {
                this.updateText()
            }, 70)
        }
    },
    watch: {
        imageUrl () {
            this.loading = true
        }
    },
    methods: {
        updateText () {
            if (!this.titleInfo.completed) {
                this.titleInfo.chars += this.titleInfo.step
                const text = this.title.substring(0, this.titleInfo.chars)
                this.$refs.title.innerHTML = text
                if (text === this.title) {
                    this.titleInfo.completed = true
                }
            } else if (!this.descriptionInfo.completed) {
                this.descriptionInfo.chars += this.descriptionInfo.step
                const text = this.description.substring(0, this.descriptionInfo.chars)
                this.$refs.description.innerHTML = text
                if (text === this.description) {
                    this.descriptionInfo.completed = true
                }
            } else {
                clearInterval(this.interval)
            }
        },
        didLoadImage () {
            this.loading = false
        }
    }
}
</script>