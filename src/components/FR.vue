<template>
  <div class="FR">
    <headerbar v-bind:en="lang"></headerbar>
    <landing aria-hidden='true'></landing>
    <info v-bind:lang="lang"></info>
    <flickity aria-hidden="true" v-bind:slides="slides" class="flickity" ref="flickity" :options="flickityOptions">
      <div class="carousel-cell" v-for="(slide) in slides">
        <img v-bind:src="slide.pic" alt="">
      </div>
    </flickity>
    <suites :suites=suites :lang=lang></suites>
    <location :lang=lang></location>
    <contact v-bind:lang="lang"></contact>
    <footerinfo></footerinfo>
  </div>
</template>

<script>
import Flickity from 'vue-flickity'

export default {
    components: {
    Flickity
    },
      data () {
      return {
        flickityOptions: {
        initialIndex: 3,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        imagesLoaded: false,
        setGallerySize: false
        // any options from Flickity can be used
      },
        lang:{
        book: 'réservez maintenant',
        button: "book now",
        kitchen: "Cuisines Complètes ",
        workspaces: "Espaces de Travail ",
        wifi: "Wifi Haute Vitesse",
        ac: "Climatisation",
        submit: "Accueille ",
        name: "Nom",
        email: "Email",
        message: "Message",
        location: "Emplacement",
        contact: "Contact",
        suites: "Suites",
        text1: "Chaque unité de l’Auberge 259 comprend une cuisine entièrement équipée pour profiter au maximum de votre séjour, des coins salons pour vous détendre ou travailler, et plus encore.",
        text2: "Située au cœur du centre-ville, dans le Quartier des spectacles, l'Auberge 259 se trouve au centre de la vie nocturne réputée de Montréal, des restaurants, des cafés et des festivals et festivités de renommée mondiale.",
        text3: "Un trajet en métro simple vous conduit au parc Jean-Drapeau, où vous pourrez assister à Osheaga, ÎleSoniq, La Ronde, Piknic Electronik et Grand Prix. ",
        contactText: "Nous serions heureux de répondre à toute question supplémentaire concernant votre séjour potentiel à l'Auberge 259. Nous vous remercions de votre patience et ferons de notre mieux pour vous répondre dans les 24 heures.",
        location1: "20 à 40 minutes en voiture de l'aéroport international Pierre-Elliott Trudeau de Montréal.",
        location2: "25-60 minutes en voiture de / vers l'aéroport de Montréal / Boisvert et Fils.",
        location3: "Nous sommes situés au cœur du quartier des divertissements de Montréal et à quelques pas du Festival de jazz, Juste pour rire, du Club Soda, du Théâtre Berri, du MTelus, de la SAT (Société d’art et de technologie), du Théâtre Olympia,  du Newspeak et bien plus encore."
          },
          slides: [
            {pic: require('../assets/auberge01.jpg')},
            {pic: require('../assets/auberge02.jpg')},
            {pic: require('../assets/auberge03.jpg')},
            {pic: require('../assets/auberge04.jpg')},
            {pic: require('../assets/auberge05.jpg')},
            {pic: require('../assets/auberge06.jpg')},
            {pic: require('../assets/auberge07.jpg')}
            ],
           suites : [
            {name: "Suite 201", 
            link: "https://www.airbnb.ca/rooms/18287687",
            sleeps: "Accomodates 4",
            buttonFR: "FRENCH",
            pic: require('../assets/suite201.jpg')},
            {name: "Suite 202", 
            link: "https://www.airbnb.ca/rooms/show/18287017",
            sleeps: "Accomodates 4",
            buttonFR: "FRENCH",
            pic: require('../assets/suite202.jpg')},
            {name: "Suite 203", 
            link: "https://www.airbnb.ca/rooms/show/18506381",
            sleeps: "Accomodates 5",
            buttonFR: "FRENCH",
            pic: require('../assets/suite203.jpg')},
            {name: "Suite 301", 
            link: "https://www.airbnb.ca/rooms/show/18747598",
            sleeps: "Accomodates 4",
            buttonFR: "FRENCH",
            pic: require('../assets/suite301.jpg')},
            {name: "Suite 302", 
            link: "https://www.airbnb.ca/rooms/show/18747398",
            sleeps: "Accomodates 4",
            buttonFR: "FRENCH",
            pic: require('../assets/suite302.jpg')},
            {name: "Suite 303", 
            link: "https://www.airbnb.ca/rooms/show/18746943",
            sleeps: "Accomodates 5",
            buttonFR: "FRENCH",
            pic: require('../assets/suite303.jpg')}
          ]
        }
      }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.flickity{
  height:300px;
}

.carousel-cell{
  width: 500px;
}

img{
  width: 100%;
}


@media only screen 
  and (max-width: 1280px) {

.flickity{
  height:225px;
}

.carousel-cell{
  width: 400px;
}

}


@media only screen 
  and (max-width: 1024px) {

  .flickity{
    height:200px;
  }

  .carousel-cell{
    width: 350px;
  }

}

@media only screen 
  and (max-width: 900px) {

  .flickity{
    height:150px;
  }

  .carousel-cell{
    width: 250px;
  }

}


@media only screen 
  and (max-width: 513px) {
  .flickity{
    display: block;
    height:250px;
  }

.carousel-cell{
  width: 100%;
}

img{
  width: 100%;
}


}
</style>
