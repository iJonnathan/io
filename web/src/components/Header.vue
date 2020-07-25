<template>
  <div id="header" class="header">
    
    <div class="navbar-fixed ">
      <nav class="navbar navbar-expand-md navbar-light fixed-top barraJona">
        <div class="aButton rotateY ">
          <a onclick="window.location.href=this">
            <img class="logoJonna" src="../assets/logoJonna.png"/>
          </a>
        </div>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ml-auto" style="padding-right: 3%; ">
            <a class="btnsRightMenu" href="#aboutme">
              <font class="btnMenu">SOBRE MI</font>
            </a>
            <a class="btnsRightMenu" href="#portafolio">
              <font class="btnMenu">PORTAFOLIO</font>
            </a>
            <a class="btnsRightMenu" href="#skills">
              <font class="btnMenu">SKILLS</font>
            </a>
            <a class="btnsRightMenu" href="#contactme">
              <font class="btnMenu">CONTACTO</font>
            </a>
            <button class="btn td-btn small outline pink" data-toggle="modal" data-target="#contactModal"><font  style="color:white; font-family: 'Unica One';">CONTACTO</font></button>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'header',
  props: {
    msg: String
  }
}
</script>

<style >
.logoJonna{
  padding-left:3%;
	transition        : 1.4s ease all;
	-moz-transition   : 1.4s ease all;
	-webkit-transition: 1.4s ease all;
	cursor: pointer;	
}
.logoJonna:hover {
	transform               : rotateY(360deg);
	-moz-transform          : rotateY(360deg);
	-webkit-transform       : rotateY(360deg);

	transition              : transform 1.0s ease all;
	-moz-transition         : -moz-transform 1.0s ease all;
	-webkit-transition      : -webkit-transform 1.0s ease all;
}




/* NavBar */
.barraJona {
  height: auto;
  width: 100%;
  font-family: Andale Mono;
  background-color: #ffffff;
  padding: 0%;
  font-style: normal;
  -webkit-box-shadow: 0px 6px 5px -2px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 6px 5px -2px rgba(0,0,0,0.75);
box-shadow: 0px 6px 5px -2px rgba(0,0,0,0.75);
}

.btnsRightMenu {
  text-decoration: none;
  padding-left: 30px;
  padding-right: 30px;
  padding-top:1%;
}
.btnMenu {
  font-family: Andale Mono;
  font-size: 16px;
  color: rgb(46, 44, 44);
}
.btnsRightMenu:hover {
  color: rgb(248, 246, 246);
  background-color: #294e3d;
  text-decoration: none;
  transform: scale(1.1, 1.1);
  transition: all 475ms;
}
.btnsRightMenu:hover .btnMenu {
  color: rgb(248, 246, 246);
}

.btnMenu:hover {
  font-style: normal;
}
/* -------------------------- */




/* =====================
  Navbar Styles
===================== */
.navbar-default {
  background-color: transparent;
  border: none;
  height: 80px;
  left: 0;
  margin-bottom: 0;
  padding: 0 30px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1000;
}
.navbar-header {
  height: 80px;
}
.navbar-nav {
  margin-bottom: 0;
  margin-top: 0;
}
.navbar-brand,
.navbar-nav > li > a {
  font-family: 'Unica One', cursive;
  padding-bottom: 0;
  padding-top: 0;
}
.navbar-brand {
  font-size: 1.5rem;
  height: 60px;
  line-height: 60px;
  margin-top: 10px;
  opacity: 0;
  overflow: hidden;
  text-transform: uppercase;
  transition: opacity 0.5s ease-in-out;
}
.navbar-brand .logo {
  margin-right: 15px;
  margin-top: -12px;
  max-height: 90px;
}
.navbar-brand span {
  color: #29a598;
}
.navbar-nav > li > a,
.navbar-nav > li > button {
  color: #6b7a78;
  height: 36px;
  line-height: 36px;
  margin-top: 22px;
}
.navbar-default .navbar-nav > .active > a {
  background-color: transparent;
  color: #29a598;
  text-decoration: underline;
}
.navbar-default .navbar-nav > li > a:focus,
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > .active > a:focus,
.navbar-default .navbar-nav > .active > a:hover {
  background-color: transparent;
  color: #208479;
  text-decoration: underline;
}
/* Fixed Menu */
.menu-fixed {
  background-color: #fffefd;
  background-color: rgba(255,254,253,0.97);
  border-radius: 0;
  box-shadow: 0 3px 9px rgba(8,33,30,0.15);
  height: 60px;
  padding-top: 0;
  position: fixed;
  transition: background-color 0.5s ease-in-out,
              box-shadow 0.5s ease-in-out;
}
.menu-fixed .navbar-header {
  height: 60px;
}
.menu-fixed .navbar-toggle,
.menu-fixed .navbar-nav > li > a {
  margin-top: 13px;
}
.menu-fixed .navbar-brand {
  display: block;
  margin-top: 0;
  opacity: 1;
}

</style>
