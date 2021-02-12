<template>
    <section class="py-12 bg-gradient-to-r from-teal-600 to-blue-500 lg:py-24" id="try">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-2xl font-bold text-white md:text-4xl" data-aos="fade-down">Try it out</h2>
            <p class="text-lg text-teal-100 mt-4 md:text-xl" data-aos="fade-up">Use our visual editor to create your Open Graph template or, if you feel confident with TailwindCSS, just <a href="#docs" class="underline text-white">go to the docs</a>.</p>
            <div class="grid grid-cols-2 gap-8 mt-8">
                <div>
                    <UrlGenerator :config="config" @update="update" />
                </div>
                <div v-if="url" class="-mt-8">
                    <div class="sticky top-0 pt-8">
                        <TwitterCard :title="config.title" :description="config.text" :href="url" :imageUrl="url" :new-tab="true" />
                    </div>
                </div>
            </div>
            <div v-if="url" class="mt-8">
                <p class="text-lg text-teal-100 mt-4 md:text-xl">This is the URL we've generated for your image (yeah we know, it's pretty big 😁). Please, feel free to modify your title and text from the URL or, if you want, any TailwindCSS class! :-)</p>
                <pre class="cursor-pointer mt-4 bg-white bg-opacity-90 border border-white rounded-xl monospace whitespace-pre-wrap p-8" @click="copyToClipboard(url)" v-html="formattedUrl"></pre>
            </div>
        </div>
    </section>
</template>

<script>
import UrlGenerator from './UrlGenerator'
import TwitterCard from './TwitterCard'
import copy from 'copy-to-clipboard'

export default {
    name: 'try-out',
    components: {
        UrlGenerator,
        TwitterCard
    },
    data () {
        return {
            config: {
                baseFontSize: 16,
                fontFamily: 'Roboto',
                title: 'This is your title',
                titleTailwind: ['text-gray-800', 'font-bold', 'text-6xl'],
                titleFontFamily: null,
                text: 'And this is your secondary text',
                textTailwind: ['text-gray-700', 'text-2xl', 'mt-4'],
                textFontFamily: null,
                logoUrl: null,
                logoTailwind: ['h-8'],
                bgUrl: null,
                bgTailwind: ['bg-white'],
                overlay: false,
                overlayTailwind: [],
                footer: 'tailgraph.com',
                footerTailwind: ['text-teal-600'],
                containerTailwind: []
            },
            url: null
        }
    },
    computed: {
        formattedUrl () {
            if (!this.url) {
                return null
            }

            const parts = this.url.split(/([\?&])/gi)
            let formattedUrl = ''
            let symbol = null
            for (const part of parts) {
                // Skip timestamp and refresh
                if (part.startsWith('t=') || part.startsWith('refresh')) {
                    symbol = null
                    continue
                }

                if (part.startsWith('https://')) {
                    formattedUrl += part
                } else if (part.startsWith('title=') || part.startsWith('text=')) {
                    // Highlight title and text
                    formattedUrl += '\n\t<span class="font-bold text-teal-600">'
                    if (symbol) {
                        formattedUrl += symbol
                        symbol = null
                    }

                    formattedUrl += part + '</span>'
                } else if (part === '&' || part === '?') {
                    symbol = part
                } else {
                    formattedUrl += '\n\t'
                    if (symbol) {
                        formattedUrl += symbol
                        symbol = null
                    }

                    formattedUrl += part
                }
            }

            return formattedUrl
        }
    },
    methods: {
        update (config, newUrl) {
            this.config = config
            this.url = newUrl
        },
        copyToClipboard (url) {
            copy(url)
            const event = new CustomEvent('toast', { detail: 'URL was copied to your clipboard.' })
            document.dispatchEvent(event)
        }
    }
}
</script>
