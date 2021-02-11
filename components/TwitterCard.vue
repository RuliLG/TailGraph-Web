<template>
    <div class="bg-white border border-gray-300 rounded-xl overflow-hidden">
        <div class="aspect-w-12 aspect-h-7 relative">
            <div class="absolute left-0 top-0 w-full h-full flex justify-center items-center">
                <div class="relative text-center px-4 lg:px-6">
                    <img src="https://tailwindcss.com/_next/static/media/tailwindcss-logotype.128b6e12eb85d013bc9f80a917f57efe.svg" alt="Tailwind CSS" class="block object-contain object-center h-8 w-auto mx-auto">
                    <div class="mt-8" ref="wrapper">
                        <p class="text-2xl text-black font-bold" ref="title"></p>
                        <p class="text-base text-gray-700 mt-4" ref="description"></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-4">
            <h1 class="text-sm">{{ title }}</h1>
            <p class="text-sm text-gray-500 mt-1">{{ description }}</p>
        </div>
    </div>
</template>

<script>
import Banner from '../lib/banner'

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
            }
        }
    },
    mounted () {
        this.interval = setInterval(() => {
            this.updateText()
        }, 70)
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
        }
    }
}
</script>