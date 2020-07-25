<template>
  <div id="portafolio" class="portafolio" >
      <div class="interest">
        <div class="center pb-3" >
          <span class="title" style="color:#394c4a">- Intereses -</span>
        </div>
        <div class="container" style="padding-left:10%;padding-right:10%;" >
          <div class="row">
            <div class="col-4">
              <img class="icon-interest" src="../assets/ui-ux-icon.png"/><br><br>
              <p class="subtitle">UI/UX Design</p>
            </div>
            <div class="col-4 " style="color:wi">
              <img class="icon-interest" src="../assets/rwd-icon.png"/><br><br>
              <p class="subtitle">Responsive Web Design</p>
            </div>
            <div class="col-4 ">
              <img class="icon-interest" src="../assets/dev-icon.png"/><br><br>
              <p class="subtitle">Development</p>
            </div>
          </div>
        </div>
      </div>
      <div style="padding:2% 0% 5% 0; background-color:rgba(59, 88, 97, 0.233); width:100%"   >
        <div class="container pt-3" >
          <span class="title">- Portaflio -</span>
          <div class="row pt-4" >
            <div id="sliderproduct" class="carousel slide" data-ride="carousel" data-interval="10000">
              <ol class="carousel-indicators">
                <li data-target="#sliderproduct" data-slide-to="0" class="active"></li>
                <li data-target="#sliderproduct" data-slide-to="1"></li>
                <li data-target="#sliderproduct" data-slide-to="2"></li>
              </ol>

              <div class="carousel-inner" role="listbox" data-interval="10000000" >
                <!--item hidromet-->
                <div class="carousel-item active">
                  <div class="container text-center">
                    <div class="row">
                      <div class="col-sm-7 image">
                        <div class="item">
                          <h1>Hidromet</h1>
                          <img class="img-fluid" src="../assets/hidromet.png"/>
                        </div>
                        <!--enditem-->
                      </div>
                      <!--endcol-->
                      <div class="col-sm-5">
                        
                        <!--endtop-->
                        <div class="details"  style="padding:2% 15% 0% 5%">
                          <br>
                          <p class="parraph">
                            Hidromet es un istema de transmisión y monitorización de información hidro-meteorológica
                            captada de varias estaciones en la zona sur del país, cuya funcionalidad principal es 
                            mostrar a los usuarios gráficas y reportes en tiempo real de series de tiempo de los
                            distintos sensores. Además, el poder descargar estos datos crudos para su posterior análisis y corrección.
                            
                          </p>
                          <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <!--endrating-->
                          <a href='https://www.promas.ucuenca.edu.ec/hidromet' target="_blank" class="btn btn-food">ir</a>
                        </div>
                        <!--enddetails-->
                      </div>
                      <!--endcol-->
                    </div>
                    <!--endrow-->
                  </div>
                  <!--endcontainer-->
                </div>
                <!--item naufrago sys-->
                <div class="carousel-item ">
                  <div class="container text-center">
                    <div class="row">
                      <div class="col-sm-7 image">
                        <div class="item">
                          <h1>Náufrago sys</h1>
                          <img class="img-fluid" src="../assets/naufrago2.png"/>
                        </div>
                        <!--enditem-->
                      </div>
                      <!--endcol-->
                      <div class="col-sm-5">
                        
                        <!--endtop-->
                        <div class="details" style="padding:15%">
                          <br>
                          <p class="parraph">
                            Naufrago sys es una aplicación de escritorio escrito en java para un restaurante, 
                            el cual permite gestionar y automatizar los procesos tales como pedidos, productos, 
                            caja y facturación.
                          </p>
                          <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <!--endrating-->
                          
                        </div>
                        <!--enddetails-->
                      </div>
                      <!--endcol-->
                    </div>
                    <!--endrow-->
                  </div>
                  <!--endcontainer-->
                </div>

                <a class="carousel-control-prev fa fa-angle-left" href="#sliderproduct" role="button" data-slide="prev"></a>
                <a class="carousel-control-next fa fa-angle-right" href="#sliderproduct" role="button" data-slide="next"></a>
              </div>
              
            </div>
            <!--endrow-->
          </div>
          <!--endcontainer-->
        </div>
      </div>
  </div>
</template>

<script>
const $ = require("jquery");
// Lo declaramos globalmente
window.$ = $;
export default {
  name: "Portafolio",
  props: {
    msg: String
  },
  data: function() {
    return {
      options: ""
    };
  },
  created() {
    $(".carousel").carousel({
      interval: 2000
    });
  }
};
</script>

<style>

.portafolio{
  background:url('../assets/fondoContactMe.png');
  text-align:center;
}
.interest{
  width: 100%;
  text-align: center;
  padding-top:3%;
  padding-bottom:3%;


}
.icon-interest{
  width: 100px;
  height: 100px;
}
:root {
  --cr1: #f36e45;
  --cr2: #fff;
  --cr3: #000000da;
  --cr4: #000000a1;
  --cr5: #beb4b1;
  --fs1: 34px;
  --fs2: 24px;
  --fs3: 20px;
  --fs4: 16px;
  --fs5: 14px;
}



.bg-product {
  /* SET Height cho nó rồi bảo sao ko lỗi? */
  /*height: 446px;*/
  background: #d1d7f5;
  /* overflow: hidden; */
}
#sliderproduct {
  width: 100%;
}
#sliderproduct .carousel-inner {
  overflow: visible;
}

#sliderproduct .col-sm-7.image {
  background: #fff;
  box-shadow: 0px 4px 8px 0px #959595;
  position: relative;
  /* Thêm cái của nợ này vào bảo sao nó ko tràn bờ đê */
  /*top: -44px;
  padding: 100px;
  padding-top: 40px;*/
}
.item {
  padding: 20px 20px 40px 20px;
}

.col-sm-6.image .item img.img-fluid {
  /* Ai mướn thêm cái vào làm phá bố cục css của người ta.. mún trang web đẹp thì phải lựa cái ảnh đẹp đẹp vào rồi set cái độ rộng cho nó vừa là được rồi */
  /*min-width: 100%;*/
  width: 315px;
}
.col-sm-6.image h1 {
  margin-bottom: 20px;
}

#sliderproduct .top a {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
  padding: 14px 22px;
  background: #e0794f;
  box-sizing: border-box !important;
  text-align: center;
  margin: 0px 2px;
  display: block;
  color: #fff;
  width: 96px;
}

#sliderproduct .col-sm-4.mr-auto {
  margin-top: 22px;
}

* {
}

#sliderproduct p.cr1 {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 30px;
}

#sliderproduct .col-sm-6:last-child {
  /* Cần nâng cao thêm kiến thức về sử dụng padding */
  padding-top: 27px;
  padding-bottom: 27px;
}
#sliderproduct .details p.d-inline-block {
  color: #e0794f;
}

#sliderproduct .details .fa {
  color: #e0794f;
  padding: 0px 3px;
}

#sliderproduct .rating {
  margin: 23px 0px;
}

#sliderproduct .details .btn {
  text-transform: uppercase;
  font-weight: 400;
  padding: 16px 22px;
  background: #e0794f;
  color: #fff;
  border-radius: 81px;
  font-size: 14px;
  display: inline-block;
}

#sliderproduct .details h2 {
  margin: 25px 0px 30px 0px;
  font-size: 24px;
  font-weight: 700;
}

#sliderproduct .details p.cr4 {
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  margin-bottom: 0px;
}
#sliderproduct .carousel-item {
  transition: 0.4s;
}

#sliderproduct a.carousel-control-prev,
#sliderproduct a.carousel-control-next {
  border-radius: 50%;
  background-color: brown;
  width: 46px;
  height: 46px;
  font-size: 30px;
  text-align: center;
  line-height: 40px;
  opacity: 1;
  top: 50%;
  transform: translate(-50%, -60%);
}

.bg {
  height: 570px;
  overflow: hidden;
}

#sliderproduct ol.carousel-indicators {
  display: none;
}
</style>