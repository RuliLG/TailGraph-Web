<template>
    <section class="py-12 bg-gradient-to-r from-teal-600 to-blue-500 overflow-hidden lg:py-24" id="try">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-2xl font-bold text-white md:text-4xl" data-aos="fade-down">Try it out</h2>
            <p class="text-lg text-teal-100 mt-4 md:text-xl" data-aos="fade-up">Use our visual editor to create your Open Graph template or, if you feel confident with TailwindCSS, just <a href="#docs" class="underline text-white">go to the docs</a>.</p>
            <div class="grid grid-cols-2 gap-8 mt-8">
                <div>
                    <UrlGenerator :config="config" @update="update" />
                </div>
                <div v-if="url">
                    <TwitterCard class="sticky top-0" :title="config.title" :description="config.text" :href="url" :imageUrl="url" :new-tab="true" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import UrlGenerator from './UrlGenerator'
import TwitterCard from './TwitterCard'

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
    methods: {
        update (config, newUrl) {
            this.config = config
            this.url = newUrl
        }
    }
}
</script>
