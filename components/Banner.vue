<template>
  <div class="banner bg-gradient-to-r from-teal-600 to-blue-500 overflow-hidden sm:pb-8 lg:pb-0">
    <div class="2xl:container mx-auto grid lg:grid-cols-2 xl:grid-cols-3">
      <div class="py-16 flex items-center justify-start px-4 lg:px-12 xl:col-span-2">
        <div>
          <h1 class="font-bold text-white text-4xl leading-tight md:text-5xl xl:text-6xl" data-aos="fade-down">Branded social images using TailwindCSS</h1>
          <p class="text-xl text-teal-50 mt-4 md:text-2xl" data-aos="fade-up">Create your custom images for the Open Graph protocol using our free API.</p>
          <div class="mt-4 flex space-x-4">
            <a href="#try" class="inline-block mt-4 rounded-lg border-2 border-white py-3 px-8 font-semibold text-white w-full text-center md:w-auto hover:bg-white hover:text-teal-600 transition duration-150" data-aos="fade-up" data-aos-delay="300">Try it out</a>
            <a href="#docs" class="inline-block mt-4 rounded-lg border-2 border-white py-3 px-8 font-semibold text-white w-full text-center md:w-auto hover:bg-white hover:text-teal-600 transition duration-150" data-aos="fade-up" data-aos-delay="300">Read the docs</a>
          </div>
        </div>
      </div>
      <div class="p-2 md:p-0">
        <TwitterFeed class="shadow-2xl max-w-xl mx-auto rounded-3xl overflow-hidden lg:rounded-none" data-aos="fade-left">
          <Tweet class="hidden md:block" image="https://avatars.dicebear.com/api/avataaars/johndoe.svg" name="WebDev" handle="@webdeveloper" text="<span class='text-teal-600'>@johndoe</span> At least you are using them! I got tired of designing a custom one for each post 🤪🤪" />
          <Tweet image="https://avatars.dicebear.com/api/avataaars/asdfg.svg" name="Daily Hero" handle="@tailgraph" text="Hey feed! Just found a new superb tool based on <span class='text-teal-600'>@tailwindcss</span>">
            <TwitterCard tabindex="-1" href="https://tailgraph.com/" title="Generate OG images using TailwindCSS with a free API" description="Create your custom images for the Open Graph protocol using our free API." />
          </Tweet>
          <Tweet class="hidden md:block" image="https://avatars.dicebear.com/api/avataaars/webdev.svg" name="John Doe" handle="@johndoe" text="Is anybody else tired of designing OG images? 😭" />
        </TwitterFeed>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .banner {
    border-radius: 0 0 2rem 2rem;
  }

  @media screen and (min-width: 1024px) {
    .banner {
      border-bottom-left-radius: 25%;
    }
  }
</style>

<script>
import TwitterFeed from './TwitterFeed'
import Tweet from './Tweet'
import TwitterCard from './TwitterCard'

export default {
  name: 'banner',
  components: {
    TwitterFeed,
    Tweet,
    TwitterCard
  }
}
</script>
