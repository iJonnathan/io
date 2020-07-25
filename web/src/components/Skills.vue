<template>
  <div class="skills" id="skills" >
      <div class="stars">
        <!--Waves Container in bottom-->
        <div style="position:absolute; width:100%;bottom: 0px;">
          <svg class="waves" style="backgroun-color:green" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax" >
              <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
              <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(255,255,255)" />
            </g>
          </svg>
        </div>
      </div>
      <div class="twinkling"></div>
      <div class="clouds"></div>
      
      <div class="header-skills">
        <!--Content before waves-->
        <div class="inner-header flex" style="padding-top:3%">
          <div class="container text-center">
              <span class="title"> - Habilidades - </span>
            <br /><br />
            <p class="subtitle">
              Front-End Developer con conocimiento en HTML5 & CSS3, Bootstrap, Materalize
              JavaScript and jQuery. Además frameworks de JavaScript como Angular, Vuejs y Nodejs
            </p>
            <br />
            <dl class="skills-diagram">
              <dt class="skill-9">
                <font class="letraSkills">Html</font>
              </dt>
              <dd>9</dd>
              <dt class="skill-8">C</dt>
              <dd>8</dd>

              <dt class="skill-10">
                <font class="letraSkills">JavaScript</font>
              </dt>
              <dd>10</dd>
              <dt class="skill-8">
                <font class="letraSkills">CSS</font>
              </dt>
              <dd>8</dd>
              <dt class="skill-7">
                <font class="letraSkills">Python</font>
              </dt>
              <dd>7</dd>

              <dt class="skill-7">
                <font class="letraSkills">Photoshop</font>
              </dt>
              <dd>7</dd>

              <dt class="skill-10">
                <font class="letraSkills">Java</font>
              </dt>
              <dd>10</dd>


              

            </dl>
          </div>
        </div>

        
        <!--Waves end-->
     
      </div>
      <!--Header ends-->
    </div>
</template>
<script>
export default {
  name: "skills",
  props: {
    msg: String
  },
  components: {
     
  }
};
</script>

<style >


@keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-webkit-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-moz-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-ms-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}

@keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-webkit-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-moz-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-ms-keyframes move-clouds-back {
    from {background-position: 0;}
    to {background-position:10000px 0;}
}

.stars, .clouds {
  position:absolute;
  width:100%;
  height:100%;
}

.stars {
  height: 1020px;
  background:#000 url('../assets/starts.png') repeat top center;
  z-index:0;
  
}


.twinkling{
  position: absolute;
  width:100%;
  height:93%;
  background:transparent url('../assets/twinkling.png') repeat top center;
  z-index:1;

  -moz-animation:move-twink-back 200s linear infinite;
  -ms-animation:move-twink-back 200s linear infinite;
  -o-animation:move-twink-back 200s linear infinite;
  -webkit-animation:move-twink-back 200s linear infinite;
  animation:move-twink-back 200s linear infinite;
}

.clouds{
    background:transparent url('../assets/clouds.png') repeat top center;
    z-index:2;
  -moz-animation:move-clouds-back 200s linear infinite;
  -ms-animation:move-clouds-back 200s linear infinite;
  -o-animation:move-clouds-back 200s linear infinite;
  -webkit-animation:move-clouds-back 200s linear infinite;
  animation:move-clouds-back 200s linear infinite;
}






.header-skills {
  width: 100%;
  position:absolute;
  z-index: 3;
  text-align:center;
  color:white;

}


.inner-header {
  margin: 0;
  padding: 0;
}

.flex { /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
}


/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
}











.skills-diagram {
  font-size: 16px;
  font-family: "Andale Mono";
  font-weight: bold;
  text-align: center;
  max-width: 35em;
  margin: 2em auto 2em;
}
.skills-diagram > dd {
  /* Hide inner attributes */
  display: none;
}
.skills-diagram dt {
  display: inline-block;
  vertical-align: top;

  border-style: solid;
  border-width: 1px;
  border-radius: 100%;

  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);

  /* set defaults to skill-2 */
  width: 2em;
  height: 2em;
  line-height: 2em;

  transition: all 0.16s ease-in-out;
}

.skills-diagram dt:hover {
  -webkit-transform: scale(1.3);
  -moz-transform: scale(1.3);
  -o-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
}

/* Support vertical mode */
.skills-diagram-vertical dt {
  display: block;
  /* .25em is an equivalent to inline-block's horizontal whitespace margin */
  margin: 0.25em auto;
}

/* Provide 10 different sizes */
.skills-diagram .skill-2 {
  width: 2em;
  height: 2em;
  line-height: 2em;

  background-color: rgba(201, 155, 129, 0.3);
  border-color: rgb(255, 255, 255);
  color: rgba(201, 155, 129, 1);
}
.skills-diagram .skill-3 {
  vertical-align: middle;

  width: 3em;
  height: 3em;
  line-height: 3em;
  background-color: rgba(138, 138, 140, 0.3);
  border-color: rgb(255, 255, 255);
  color: rgba(138, 138, 140, 1);
}
.skills-diagram .skill-4 {
  width: 4em;
  height: 4em;
  line-height: 4em;

  background-color: rgba(234, 112, 97, 0.3);
  border-color: rgb(255, 255, 255);
  color: rgba(234, 112, 97, 1);
}
.skills-diagram .skill-5 {
  vertical-align: bottom;
  width: 5em;
  height: 5em;
  line-height: 5em;
  background-color: rgba(160, 182, 109, 0.3);
  border-color: rgb(255, 255, 255);
  color: #c7bebe;
}
.skills-diagram .skill-6 {
  vertical-align: top;

  width: 6em;
  height: 6em;
  line-height: 6em;

  background-color: rgba(155, 62, 112, 0.3);
  border-color: rgb(255, 255, 255);
  color: #c7bebe;
}
.skills-diagram .skill-7 {
  width: 7em;
  height: 7em;
  line-height: 7em;

  background-color: rgba(138, 19, 69, 0.815);
  border-color: rgba(138, 19, 69, 0.815);
  color: #c7bebe;
}
.skills-diagram .skill-8 {
  vertical-align: bottom;

  width: 8em;
  height: 8em;
  line-height: 8em;
  background-color: rgba(70, 165, 168, 0.808);
  border-color: rgba(70, 165, 168, 0.808);
  color: #c7bebe;
}
.skills-diagram .skill-9 {
  width: 11em;
  height: 11em;
  line-height: 11em;

  background-color: rgba(12, 39, 161, 0.753);
  border-color: rgba(12, 39, 161, 0.753);
  color: #c7bebe;
}
.skills-diagram .skill-10 {
  width: 14em;
  height: 14em;
  line-height: 14em;

  background-color: rgba(255, 153, 0, 0.856);
  border-color: rgba(255, 153, 0, 0.856);
  color: #0a0909;
}
.letraSkills {
  font-size: 15px;
}
</style>
