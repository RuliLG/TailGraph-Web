<template>
  <div>
    <ToastController />
    <Banner />
    <section class="py-12 lg:py-24">
      <div class="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold md:text-4xl" data-aos="fade-down">What's the TailGraph service?</h2>
        <p class="text-lg text-gray-700 mt-4 md:text-xl" data-aos="fade-up">TailGraph is a free API to help developers and content creators easily generate OG images using <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" class="text-teal-600">TailwindCSS</a>.</p>
      </div>
    </section>
    <TryOut />
    <section class="py-12 lg:py-24">
      <div class="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold md:text-4xl" data-aos="fade-down">What's the TailGraph service?</h2>
        <p class="text-lg text-gray-700 mt-4 md:text-xl" data-aos="fade-up">TailGraph is a free API to help developers and content creators easily generate OG images using <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" class="text-teal-600">TailwindCSS</a>.</p>
      </div>
    </section>
    <section class="py-12 lg:py-24">
      <div class="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold md:text-4xl" data-aos="fade-down">What's the TailGraph service?</h2>
        <p class="text-lg text-gray-700 mt-4 md:text-xl" data-aos="fade-up">TailGraph is a free API to help developers and content creators easily generate OG images using <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" class="text-teal-600">TailwindCSS</a>.</p>
      </div>
    </section>
    <section class="py-12 lg:py-24">
      <div class="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold md:text-4xl" data-aos="fade-down">What's the TailGraph service?</h2>
        <p class="text-lg text-gray-700 mt-4 md:text-xl" data-aos="fade-up">TailGraph is a free API to help developers and content creators easily generate OG images using <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" class="text-teal-600">TailwindCSS</a>.</p>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import ToastController from '../components/ToastController'
import TryOut from '../components/TryOut'

export default {
  name: 'index',
  components: {
    Banner,
    TryOut,
    ToastController
  }
}
</script>
