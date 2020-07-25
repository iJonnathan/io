<template>
  <div id="aboutme" class="aboutme" style="background-color:transparent">
    <div class="content">
      
        <div class="container" style="width:100%; height:100%;padding-top:8%; padding-bottom:8%">
          <div class="row">
            <div class="col-4">
              <div style="padding:5%">
                <img src="../assets/perfill.jpg"
                  class="rounded-circle perfilImg" alt="HelPic"
                  style="position:relative"
                />
              </div>
            </div>
            <div class="col-8 " enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" >
              <div style="padding:5%">
                <link href="https://fonts.googleapis.com/css?family=Cantarell|Oswald:400,700|Pacifico&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Audiowide&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed&display=swap" rel="stylesheet"/>
                <h5 style="font-family: 'Pacifico', cursive, bold; font-size: 30px">Hola, mi nombre es</h5>
                <h2 style="font-family: 'Oswald', sans-serif;; font-size: 70px">Jonnathan Peñaranda S.</h2>
                <p style="font-family: 'Audiowide'; font-size: 14px">
                  D &nbsp;E&nbsp; S&nbsp; A&nbsp; R&nbsp; R&nbsp; O &nbsp;L &nbsp;L&nbsp; A &nbsp;D&nbsp; O &nbsp;R&nbsp; &nbsp;_&nbsp; &nbsp; W &nbsp;E &nbsp;B
                  
                </p>
                <p class="parraph">
                  Ingeniero de Sistemas de la Universidad de Cuenca. Diseñador UX y Programador Web | Front-End & Back-End
                </p>

                <p class="parraph">
                  Hecha un vistazo de las cosas que he hecho y sé ...
                </p>

                <div style="width: 100%;text-align: center;">
                  <br><br><br>
                  <a class="arrow-wrap" href="#portafolio" >
                    <span class="arrow"></span>
                    <!--<span class="hint">scroll</span>-->
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

import 'animate.css';
export default {
  name: 'AboutMe',
  props: {
    msg: String
  }
}
</script>

<style >
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

/* Mi */

.perfilImg {
  height: 340px;
  width: 340px;
}
 .aboutme{
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 850%, 50% 100%, 0 85%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
  }

/* -------------------------- */

.content {
  position:relative;
  overflow:hidden;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  height:100%;
  min-height:450px;
  max-height:100%;
  min-width:300px;
  color:#eee;
}
.content:after{
  content:"";
  width:100%;
  height:100%;
  position:absolute;
  bottom:0;
  left:0;
  z-index:-1;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(27,32,48,1) 100%);
}
.content:before{
  content:"";
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0) scale(1.0, 1.0);
    transform: translateZ(0);
  background:#ffffff url("../assets/fondoMac.jpg") top center no-repeat;
  background-attachment: fixed;
  background-size: cover;
  animation: grow 30s  linear 10ms infinite;
  transition:all 0.1s ease-in-out;
  z-index:-2
}
  

@keyframes grow {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}


.arrow-wrap {
  padding-top: 10%;
  
}

.arrow {
  
  position:relative;
border-style: solid;
border-width: 3em 3em 0 3em;
border-color: #ffffff transparent transparent transparent;
  -webkit-transform:rotate(360deg);
  opacity: 60%;

}
.arrow:after {
  content:'';
  position:absolute;
  top:-3.2em;
  left:-3em;
  width: 0px;
height: 0px;
border-style: solid;
border-width: 3em 3em 0 3em;
border-color: #1f2e29 transparent transparent transparent;
  -webkit-transform:rotate(360deg)
}
</style>
