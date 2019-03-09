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
        book: 'reservations',
        button: "book now",
        kitchen: "Full Kitchens",
        workspaces: "Workspaces",
        wifi: "High Speed Wifi",
        ac: "Air Conditioning",
        submit: "Submit",
        name: "Name",
        email: "Email",
        message: "Message",
        location: "Location",
        contact: "Contact",
        suites: "Suites",
        text1: "Each unit at Auberge 259 features a full kitchen en-suite to make the most of your stay, sitting areas to relax in or get some work done and more.",
        text2: "Located in the heart of Downtown in Le Quartier Des Spectacles, Auberge 259 is in the center Montreal's reknowned nightlife, restaurants, cafes and festivals.",
        text3: "A single-stop metro ride takes you to Parc Jean Drapeau where you can attend Osheaga, Ilesoniq, La Ronde, Piknic Electronik and Grand Prix.",
        contactText: "We would be happy to answer any addtional questions regarding your potential stay at Auberge 259. We appreciate your patience and will do our best to respond to you within 24 hours.",
        location1: "20 - 40 minute drive to/from Montréal-Pierre Elliott Trudeau International Airport.",
        location2: "25-60 minutes drive to/from Montréal/Boisvert and Fils Water Airport.",
        location3: "We are located in the heart of Montreal's entertainment district and a short walk from Jazz Fest, Just for Laughs, Club Soda, Berri Theater, SAT (Society For Art andTechnology) Metropolis, Olympia Theater and much more."
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
