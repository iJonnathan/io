<template>
  <div class=" contactme" id="contactme" >
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/fontawesome.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.css">
    <link href="https://fonts.googleapis.com/css?family=Oswald:400,700|Roboto&display=swap" rel="stylesheet">

    <div class="section-contact">
      <div style="text-align:center">
        <span class="title"> - Contácteme - </span>
      </div>
      <div class="form-contact">
          <form>
            <div class="row">
              <div class="col-md-12">
                <div class="single-input">
                  <i class="fas fa-user"></i>
                  <input type="text" v-model="name" name="name" placeholder="Ingresa tu nombre">
                </div>
              </div>
              <div class="col-md-12">
                <div class="single-input">
                  <i class="fas fa-envelope"></i>
                  <input type="email" v-model="email" name="email" placeholder="Ingresa tu e-mail">
                </div>
              </div>
              <div class="col-12">
                <div class="single-input">
                  <i class="fas fa-comment-dots"></i>
                  <textarea  v-model="message" placeholder="Aquí tu mensaje ..."></textarea>
                </div>
              </div>
              <div class="col-12">
                <div class="submit-button text-center" >
                  <button type="button" class="btn btn-outline-dark" v-on:click="sendMessage" >Enviar</button>
                </div>
              </div>
            </div>
          </form>
      </div>

    </div>
  </div>
</template>
<script>
import axios from "axios";
import Vue from 'vue'

export default {
  name: 'contactme',
  props: {
    msg: String
  },
  data: function() {
    return {
      name: "",
      email: "",
      message: ""
    };
  },
  methods:{
    emailisvalid(){

    },
    sendMessage(){
      if(this.name!='' && this.email!='' && this.message!=''){
        axios.post('http://localhost:3000/contactMe', {
          message: {name:this.name, email:this.email, message:this.message}
        }).then(response => {
           
          Vue.notify({
            group: 'foo',
            title: response.data,
            text: ''
          })

        })
        .catch(error => {
          //console.log(error)
          Vue.notify({
            group: 'auth',
            title: error
          })
        })
        .finally(() => this.loading = false)

      }else{
        Vue.notify({
            group: 'auth',
            title: 'existen campos vacios'
          })
      }
    }
  }
}
</script>

<style>
.contactme{
  padding:5%;
  width: 100%;
  height: 100%;
  background: url('../assets/fondoContactMe.png')
    center no-repeat;
}
.section-contact {
  padding:0% 15% 0% 15%;
}

.section-contact .form-contact .single-input {
	position: relative;
    margin-top: 40px;
}

.section-contact .form-contact .single-input i {
	position: absolute;
    top: 5px;
    left: 15px;
    color: #2a5340;
}

.section-contact .form-contact .single-input input,
.section-contact .form-contact .single-input textarea {
	width: 100%;
    border: none;
    background: transparent;
    border-bottom: 2px solid #07395c;
    padding-left: 50px;
    padding-bottom: 15px;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
		transition: border .3s;
}

.section-contact .form-contact .single-input input::placeholder,
.section-contact .form-contact .single-input textarea::placeholder {
	color: rgba(7, 57, 92, .3);
}

.section-contact .form-contact .single-input input:focus,
.section-contact .form-contact .single-input textarea:focus {
	border-color: #df383f;
}

.section-contact .form-contact .single-input textarea {
	height: 150px;
	min-height: 50px;
}

.section-contact .form-contact .submit-button button {
	margin-top: 40px;
    padding: 15px 50px;
    background-color: #2a5340;
    color: #fff;
    border: none;
    font-weight: 700;
    transition: background-color .3s;
}

.section-contact .form-contact .submit-button button:hover {
	background-color: #2a5340ef;
  color:yellow
}



</style>
