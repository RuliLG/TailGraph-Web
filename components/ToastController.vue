<template>
    <div class="relative z-50">
        <Toast data-aos="fade-in-up" v-if="toastMessage" :message="toastMessage" />
    </div>
</template>

<script>
import Toast from './Toast'
export default {
    name: 'toast-controller',
    components: {
        Toast
    },
    data () {
        return {
            toastMessage: null,
        }
    },
    mounted () {
        document.addEventListener('toast', (event) => {
            this.toastMessage = event.detail
            setTimeout(() => {
                this.toastMessage = null
            }, 3000)
        })
    }
}
</script>