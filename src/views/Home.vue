<template>
  <div class="home">
    <Header/>
    <Search/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header/Header.vue'
import Search from '@/components/Search/SearchComponent.vue'
export default {
  name: 'Home',
  components: {
    Search,
    Header
  }
}
</script>
