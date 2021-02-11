<template>
  <div class="bg-gradient-to-b from-blue-600 to-blue-500 py-16">
    <div class="container grid grid-cols-2 px-4 sm:px-6 lg:px-8">
      <div>
        
      </div>
      <div>
        <TwitterCard title="Generate OG images using TailwindCSS with a free API" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et" />
      </div>
    </div>
  </div>
</template>

<script>
import TwitterCard from '../components/TwitterCard'

export default {
  name: 'index',
  components: {
    TwitterCard
  }
}
</script>
