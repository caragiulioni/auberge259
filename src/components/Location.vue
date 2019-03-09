<template>
  <div class="location">
  	<section class="">
  		<div class="headings expand"><h2>{{ lang.location }} </h2></div>

      <div class="locationContainer wrapper margins">
        <div class="map" aria-hidden="true">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11183.533556571221!2d-73.5617677!3d45.512426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xebd407a353917219!2sauberge+259!5e0!3m2!1sen!2sca!4v1552171097962" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        <div class="locationText">
          <div class="text text1"><p>{{ lang.location1 }}</p></div>
          <div class=" text text2"><p>{{ lang.location2 }}</p></div>
          <div class="text text3"><p>{{ lang.location3 }}</p></div>
        </div>
      </div> <!-- ///location container end/// -->
  	</section>
  </div>
</template>

<script>
export default {
    props:['lang',],
      data () {
      return {
        }
      }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.location{
    background-image: url(../assets/tile.png);
    border-bottom: 1px solid #5A5A5A;
}

iframe{
  width: 100%;
  height: 175px;
}

.locationContainer{
  margin: 0 auto;
  margin-top: 25px;
}

.locationText{
  display: flex;
  padding: 25px 0px;

}

.text{
  padding: 0px 15px;
}

.text1, .text2{
  font-weight: bold;
}

@media only screen /* iPhone 6, 6S, 7 and 8 */
  and (max-width: 900px) {
  .locationText{
  flex-direction: column;
  }
    .text{
    padding: 5px 15px;
  }
}

@media only screen 
  and (max-width: 500px) {
  .locationText{
  padding: 10px 0px;
  }

  .locationContainer{
    margin-top: 15px;
  }


}


</style>
