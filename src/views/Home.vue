<template>
  <div class="home">
    <div class="content uno" id="sec1">
      <nav class="navbar" >
        <div class="box" id="header">
          <h2>Casa de Dios</h2>

          <input type="button" style="display:none;" @click="toggleMenu" id="checkbox" />
          <label for="checkbox" id="toggle">
            <font-awesome-icon id="menui" icon="bars" class="icon" />
          </label>
        </div>

        <div class="box" id="options">
          <a class="nav-item" @click="closeMenu" href="#sec1">Inicio</a>
          <a class="nav-item" @click="closeMenu" href="#sec2">Nosotros</a>
          <a class="nav-item" @click="closeMenu" href="#sec3">Unite</a>
          <a class="nav-item" @click="closeMenu" href="#sec4">Galeria</a>
          <a class="nav-item" @click="closeMenu" href="#sec5">Contacto</a>
        </div>
      </nav>

      <div class="black" style="padding-top: 40px; ">
        <img src="../assets/logo.png" id="logo" alt />
      </div>
    </div>

    <!--about-->
    <div class="content about" id="sec2" style="padding-top:15vh;">
      <div class="title">
        <h1>Nosotros</h1>
      </div>
      <div class="cards-about">
        <div class="card-about">
          <font-awesome-icon icon="eye" class="icon" />
          <h1>Vision</h1>
          <p class="card-contact-item">Ser de Bendición/ Ayudar al necesitado y predicar la palabra</p>
        </div>
        <div class="card-about">
          <font-awesome-icon icon="bullseye" class="icon" />
          <h1>Mision</h1>
          <p class="card-contact-item">Predicar la palabra</p>
        </div>
      </div>
    </div>
    <div style="height: 150px; overflow: hidden;">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path
          d="M-5.92,-6.41 C-84.36,235.36 440.46,72.53 500.27,-0.48 L495.77,-24.17 L215.29,-7.39 Z"
          style="stroke: none; fill: #40a7ff;"
        />
      </svg>
    </div>
    <!--ayudanos-->
    <div class="content help" id="sec3" style="padding-top:15vh;">
      <div class="card-help">
        <h1>¡Ayudanos!</h1>
        <p class="info-help">
          Seguís buscando donde poder trabajar para Dios y para bendecir a otros? Te invitamos a ser participe de Casa de Dios en las calles. Mucha gente necesita una vianda y una palabra de aliento y amistad.
          Trabajamos en equipo para llevar esperanza, amor y palabra de Dios.
          La iglesia sigue llegando a los necesitados.
          VOS PODES SER PARTE.
        </p>
      </div>
    </div>
    <div style="height: 150px; overflow: hidden;">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path
          d="M-8.74,154.44 C156.59,120.88 476.01,139.63 500.27,-0.48 L508.17,174.17 L206.26,152.45 Z"
          style="stroke: none; fill: #3374b4;"
        />
      </svg>
    </div>
    <div class="content gallery" id="sec4" style="padding-top:15vh;">
      <div class="title" style="margin-bottom:30px;">
        <h1>Galeria</h1>
      </div>
      <div class="cards-gallery">
        <div class="slider">
          <ul>
            <li><img src="../assets/uno.jpg" alt=""></li>
            <li><img src="../assets/dos.jpg" alt=""></li>
            <li><img src="../assets/tres.jpg" alt=""></li>
            <li><img src="../assets/cuatro.jpg" alt=""></li>
          </ul>
        </div>
      </div>
    </div>
    <!--contacto-->
    <div class="content contact" id="sec5" style="padding-top:15vh;">
      <h1>Contacto</h1>
      <div class="cards-contact">
        <div class="card-contact">
          <a class="card-contact-item" href="mailto:email@gmail.com">
            <font-awesome-icon icon="inbox" class="icon" />email@gmail.com
          </a>

          <p class="card-contact-item">
            <font-awesome-icon icon="phone" class="icon" />+54 9(11) 11223344
          </p>
          <p class="card-contact-item">
            <font-awesome-icon icon="map-marker-alt" class="icon" />Av. Mitre 5061, Villa Dominico
          </p>
        </div>
        <div class="card-contact">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.0969616281305!2d-58.32950367080377!3d-34.69539629613449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a332f6f584b04d%3A0x431d5857aef3e6f6!2sAv.%20Bartolom%C3%A9%20Mitre%205061%2C%20B1874ABB%20Villa%20Dominico%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1585186020996!5m2!1ses-419!2sar"
            width="400"
            height="250"
            frameborder="0"
            style="box-shadow: 6px 7px 18px -4px rgba(0,0,0,0.75);"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <div class="card-contact">
          <a
            class="card-contact-item"
            href="https://www.facebook.com/casadeDiosenlascalles/"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'facebook-square']" class="icon" />Facebook
          </a>
          <a class="card-contact-item" href="https://www.instagram.com/" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram-square']" class="icon" />Instagram
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      if (!this.isOpen) {
        document.getElementById("options").style.display = "flex";
        this.isOpen = true;
      } else {
        document.getElementById("options").style.display = "none";
        this.isOpen = false;
      }
    },
    closeMenu(){
      if(window.innerWidth<=450)
     { document.getElementById("options").style.display = "none";
      this.isOpen = false;}
    }
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Sen&display=swap");
@import url("https://fonts.googleapis.com/css?family=Lobster&display=swap");
@import '../scss/navbar.scss';
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html {
  scroll-behavior: smooth;
}
/*-------------HOME----------*/
.home {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.uno {
  height: 100vh;
  font-family: "Sen", sans-serif;
}
.content {
  background: #fff fixed no-repeat 50% 50%;
  background-size: cover;
}
#sec1 {
  background-image: url("../assets/fondo.jpg");
}

/*navbar*/
@include navbar;
/*navbar fin*/
.black {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 0;
}
#logo {
  height: 60vh;
  width: 40vw;
}
/*-----HELP US---*/
@include help;
/*----------CONTACT--------*/
@include contact;
/*-----------------------------------------------------------------------------GALLERY-------------------------------------------------------------------------------------------------------*/
@include gallery;
/*-------ABOUT US----------*/
@include about;
@media (max-width: 450px) {
  #toggle {
    display: initial;
  }
  iframe {
    width: 100%;
  }
  .cards-contact {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .card-contact {
    width: 80%;
  }

  .card-help {
    width: 100%;
    margin: 0;
  }

  .info-help {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .cards-about {
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
  }

  .card-about {
    width: 100%;
  }

  .about {
    height: auto;
  }
  .black {
    display: block;
    
  }

  .content {
    display: block;
  }

  #logo {
    margin-top: 25%;
    width: 100%;
    height: auto;
  }

  .navbar {
    flex-direction: column;
    border: none;
    height: auto;
  }

  #options {
    height: auto;
    display: none;
    background-image: radial-gradient(circle, #73bfcf, #54b5d7, #3ba9df, #399be5, #518be5);
    box-shadow: 0px 5px 8px -1px rgba(0,0,0,0.75);
    /* display: flex; */
    width: 100%;
    flex-direction: column;
    margin: 0;
  }

  #menui {
    margin-top: 40%;
    width: 40px;
    height: 40px;
  }

  #header {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    margin-top: 5px;
    margin-bottom: auto;
  }

  .nav-item:hover {
    background-color: white;
    color: rgba(30, 125, 220, 0.8);
    font-size: 1.6rem;
    transition: all 0.2s;
  }
  .slider{
  width: 90%;
  
  margin: auto;
  overflow: hidden;
}
.slider ul{
  padding: 0;
  display: flex;
  width: 400%;
  animation:change 20s infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in;
  
}
.slider li{
  width:100%;
  list-style: none;
}
.slider img{
  width: 200%;
  height: 50%;
  box-shadow: 1px 4px 13px 2px rgba(0,0,0,0.75);
  filter: brightness(60%);
}
}
</style>
