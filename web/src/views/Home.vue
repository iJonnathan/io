<template>

  <div id="home" class="home">


    <Header></Header>
    <div class="divaboutme" >
      <AboutMe></AboutMe>
    </div>
    <Portafolio></Portafolio>
    <Skills></Skills>
    <div style="padding-top:1010px; width:100%;">
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import AboutMe from '@/components/AboutMe.vue'
import Portafolio from '@/components/Portafolio.vue'
import Skills from '@/components/Skills.vue'
import ContactMe from '@/components/ContactMe.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: "Home",
  components: {
     Header, AboutMe, Portafolio, Skills,ContactMe, Footer
  }
};
</script>
<style>
.divaboutme{
  padding-bottom:1%;
  
  background:url('../assets/fondoContactMe.png');
}
</style>