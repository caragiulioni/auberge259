<template>
  <div class="location">
  	<section class="">

  		<div class="headings expand"><h2>{{ lang.location }} </h2></div>

      <div class="locationContainer wrapper margins">
 
            <div class="map" aria-hidden="true">
                <iframe class="iframe" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJv5CcC00ayUwRZ6MoV7nb6zg&key=AIzaSyAUCVq8X5xTOlQAfmOuF0WYhtg7DTCbRPc" allowfullscreen></iframe>
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
  and (max-width: 500px)  {
.locationText{
flex-direction: column;
padding: 10px 0px;
}

.locationContainer{
  margin-top: 15px;
}

.text{
  padding: 5px 15px;
}


  }


</style>
