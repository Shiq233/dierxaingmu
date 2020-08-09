<template>
  <div>
    <header></header>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/demo/header.vue'

export default {
  
  components: {
    'Header':Header
  }
}
</script>