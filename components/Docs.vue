<template>
    <section id="docs" class="py-12 lg:py-24">
        <div class="container px-4 mx-auto sm:px-6 lg:px-8">
            <h2 class="text-2xl font-bold md:text-4xl" data-aos="fade-down">Docs</h2>
            <p class="text-lg text-gray-600 mt-4 md:text-xl" data-aos="fade-up">
                You can use our visual editor to create your template in a more visual way. Although this is cool to get an overview, you can actually
                make use of <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" class="text-teal-600 font-bold">every TailwindCSS class</a> to
                customize your OG image.
            </p>

            <div class="lg:grid lg:grid-cols-2">
                <div>
                    <h3 class="text-xl font-bold mt-16 md:text-3xl" data-aos="fade-down">Layout structure</h3>
                    <p class="text-lg text-gray-600 leading-loose mt-8 md:text-xl" data-aos="fade-up">
                        It's also important to know which HTML structure is working behind the scenes, to understand how to squeeze our generator capabilities.
                    </p>
                    <p class="text-lg text-gray-600 leading-loose mt-4 md:text-xl" data-aos="fade-up">
                        Behind everything, there's the <strong>background</strong>. It can be an image from a URL, a gradient or just a plain color. Everything thanks to Tailwind!
                    </p>
                    <p class="text-lg text-gray-600 leading-loose mt-4 md:text-xl" data-aos="fade-up">
                        Sometimes, the the background may be too dark or too clear for our text. That's why, right above the background, we placed the <strong>overlay</strong> layer.
                        This layer is pretended to be used as a gradient or a plain color with some opacity, but there are more things you can do with it. TailGraph is also bundled with
                        <a href="https://github.com/hacknug/tailwindcss-blend-mode" target="_blank" rel="noopener noreferrer" class="text-teal-600 font-bold">TailwindCSS Blend Mode</a>, so you can blend your overlay with the background
                        by using any of its classes.
                    </p>
                    <p class="text-lg text-gray-700 leading-loose mt-4 md:text-xl" data-aos="fade-up">
                        Finally, there are two main elements above this overlay:
                        <ol class="my-4 list-decimal pl-4 ml-4">
                            <li>
                                <strong>Container View:</strong> It's a div which contains the logo and both texts.
                            </li>
                            <li class="mt-4">
                                <strong>Footer:</strong> It's a div with absolute positioning at the bottom of the image.
                            </li>
                        </ol>
                    </p>
                </div>
                <div class="pt-8 pr-8 md:pt-16 md:pr-0" data-aos="fade-up">
                    <div class="pt-32 sticky top-0 overflow-hidden lg:overflow-visible">
                        <div class="aspect-w-16 aspect-h-9 text-center">
                            <div class="absolute left-0 top-0 w-full h-full flex justify-center items-center border border-gray-300 bg-white transform skew-y-12 skew-x-12 -rotate-15 md:scale-75" ref="background">
                                <div class="absolute left-0 top-0 p-2 bg-gray-600 text-white text-xs opacity-0 transition duration-500" ref="background-tip">Background</div>
                                <div class="absolute left-0 top-0 w-full h-full transition duration-500" ref="overlay">
                                    <div class="absolute left-0 top-0 p-2 bg-black text-white text-xs opacity-0 transition duration-500" ref="overlay-tip">Overlay</div>
                                </div>
                                <div class="relative p-4 md:p-8 transition duration-500" ref="container">
                                    <div class="absolute left-0 top-0 p-2 bg-blue-600 text-white text-xs opacity-0 transition duration-500" ref="container-tip">Container</div>
                                    <img src="~/assets/logo.svg" alt="TailGraph logo" class="block object-contain object-center h-6 sm:h-8 md:h-16 w-auto mx-auto md:mb-4">
                                    <h1 class="text-base sm:text-xl font-bold md:mb-4 md:text-3xl">This is the title</h1>
                                    <p class="hidden text-gray-600 text-sm sm:block md:text-vase">This is the secondary text</p>
                                </div>
                                <p class="block absolute bottom-0 left-0 w-full p-1 text-blue-700 font-semibold transition duration-500 text-xs sm:text-sm md:text-base md:p-2" ref="footer">Hey! I am the footer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 class="text-xl font-bold mt-16 md:text-3xl" data-aos="fade-down">API Params</h3>
                <p class="text-lg text-gray-600 leading-loose mt-8 md:text-xl" data-aos="fade-up">
                    To create your desired Open Graph image, we will accept the following parameters on our URL (<strong @click="copyEndpoint()">https://og.tailgraph.com/og</strong>)
                </p>

                <div class="flex flex-col mt-8">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Query Parameter
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Description
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Type
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Default value
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                baseFontSize
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 lg:whitespace-normal">
                                                Tailwind units are based on <strong>rem</strong>. This parameter would modify the sizing of every item on the image.
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                Number
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                16 (px)
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-50">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                fontFamily
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 lg:whitespace-normal">
                                                Font name from Google Fonts. If it contains multiple words, spaces must be replaced by "+" (i.e. "Reggae+One")
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                String
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                None
                                            </td>
                                        </tr>
                                        <tr class="bg-white">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                logoUrl
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 lg:whitespace-normal">
                                                Fully qualified URL of the desired logo.
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                URL
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                None
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-50">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                logoTailwind
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 lg:whitespace-normal">
                                                Tailwind CSS classes string (separated by spaces).
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                String
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                None
                                            </td>
                                        </tr>
                                        <tr class="bg-white">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                title
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 lg:whitespace-normal">
                                                Title text.
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                String
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                None
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-50">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                titleTailwind
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 lg:whitespace-normal">
                                                Tailwind CSS classes string (separated by spaces).
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                String
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                None
                                            </td>
                                        </tr>
                                        <tr class="bg-white">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                titleFontFamily
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 lg:whitespace-normal">
                                                Font name from Google Fonts. If it contains multiple words, spaces must be replaced by "+" (i.e. "Reggae+One"). This value would override the global `fontFamily` configuration.
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                String
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                None
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-50">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                text
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 lg:whitespace-normal">
                                                Secondary text.
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                String
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                None
                                            </td>
                                        </tr>
                                        <tr class="bg-white">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                textTailwind
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 lg:whitespace-normal">
                                                Tailwind CSS classes string (separated by spaces).
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                String
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                None
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-50">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                textFontFamily
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 lg:whitespace-normal">
                                                Font name from Google Fonts. If it contains multiple words, spaces must be replaced by "+" (i.e. "Reggae+One"). This value would override the global `fontFamily` configuration.
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                String
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                None
                                            </td>
                                        </tr>
                                        <tr class="bg-white">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                bgUrl
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 lg:whitespace-normal">
                                                Background image URL.
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                URL
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                None
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-50">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                bgTailwind
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 lg:whitespace-normal">
                                                Tailwind CSS classes string (separated by spaces).
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                String
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                None
                                            </td>
                                        </tr>
                                        <tr class="bg-white">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                overlay
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 lg:whitespace-normal">
                                                Defines if the overlay layer should be displayed or not.
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                Boolean (1 or 0)
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                None
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-50">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                overlayTailwind
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 lg:whitespace-normal">
                                                Tailwind CSS classes string (separated by spaces).
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                String
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                None
                                            </td>
                                        </tr>
                                        <tr class="bg-white">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                footer
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 lg:whitespace-normal">
                                                Footer text.
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                String
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                None
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-50">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                footerTailwind
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 lg:whitespace-normal">
                                                Tailwind CSS classes string (separated by spaces).
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                String
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                None
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-50">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                containerTailwind
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 lg:whitespace-normal">
                                                Tailwind CSS classes string (separated by spaces).
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                String
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                None
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-50">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                Refresh
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 lg:whitespace-normal">
                                                From time to time, our little robot does not generate the correct image. To refresh it, just put this parameter to 1 and he will try it again :). Once generated, it will be cached until you refresh it again.
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                String
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                None
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import copy from 'copy-to-clipboard'

export default {
    name: 'docs',
    data () {
        return {
            interval: null
        }
    },
    mounted () {
        this.interval = setInterval(() => {
            this.animateLayers()
        }, 5000)
    },
    beforeDestroy () {
        if (this.interval) {
            clearInterval(this.interval)
        }
    },
    methods: {
        animateLayers () {
            const classes = {
                background: [],
                overlay: ['bg-black', 'bg-opacity-25', 'transform', '-translate-y-12', 'translate-x-12', 'shadow-lg'],
                container: ['transform', '-translate-y-24', 'translate-x-24', 'shadow-2xl', 'bg-blue-100'],
                footer: ['transform', '-translate-y-24', 'translate-x-24', 'shadow-2xl', 'bg-blue-200'],
            }

            for (const key in classes) {
                for (const klass of classes[key]) {
                    this.$refs[key].classList.toggle(klass)
                }

                if (this.$refs[key + '-tip']) {
                    this.$refs[key + '-tip'].classList.toggle('opacity-0')
                }
            }
        },
        copyEndpoint () {
            copy('https://og.tailgraph.com/og')
            const event = new CustomEvent('toast', { detail: 'Endpoint was copied to your clipboard.' })
            document.dispatchEvent(event)
        }
    }
}
</script>