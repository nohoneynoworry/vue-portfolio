<template>
  <Header v-if="$route.name != 'NotFound'" />
  <router-view />
  <Footer v-if="$route.name != 'NotFound'" />
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Header,
    Footer
  }
}
</script>
