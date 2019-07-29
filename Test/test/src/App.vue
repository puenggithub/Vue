<template>
  <div id="app" class="container-fluid" style="width: 1200px; height: 1000px;">
   <h1>{{ title }}</h1>
   <navb />
  </div>
</template>

<script>
import navb from './Navbar'

export default {
  name: 'app',
  components: {
    navb
  },
  data () {
    return {
      title: 'Home Shuffle Card ;)'
    
    }
  }
}
</script>

<style>
h1 {
  color: #444;
  font-weight: normal;
  text-align: center;
  margin: 20px 0 20px 0;
}
</style>
