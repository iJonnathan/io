<template>
  <div id="app">
    <transition name="fade">
      <component v-bind:is="component" />
    </transition>
    <notifications group="foo" />
    <notifications group="auth" />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/views/Home.vue'
import LoadPage from '@/components/LoadPage.vue'

const $ = require("jquery");
// Lo declaramos globalmente
window.$ = $;
export default {
  name: 'App',
  components: {
    Home, LoadPage
  },
  data (){
    return {
      component:"LoadPage",
      json: null
    }
  },

  created(){
   /* this.$getLocation({
    enableHighAccuracy: true, //defaults to false
    timeout: Infinity, //defaults to Infinity
    maximumAge: 1 //defaults to 0
    
})
  .then(coordinates => {
    //console.log(coordinates);
  });

*/


  
    
    setTimeout(() => {
        this.component="Home";
    }, 3500);
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .7s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>
