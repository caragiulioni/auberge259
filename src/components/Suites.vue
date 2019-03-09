<template>
  <div class="">
  	<section>
     <div class="headings"><h2>{{ lang.suites }}</h2></div>
      <div class="suites">
  		<div class="margins" v-for="suite in suites">
      		<div class="suite">
            <div class="suiteDetails wrapper">
  	        	<div class="suiteText">
  	          		<h3>{{ suite.name }}</h3>
  	          		<p>{{ suite.sleeps }}</p>
  	        	</div>
              <div class="button buttonScope"><a v-bind:href="suite.link">{{ lang.button}}</a></div>
            </div>
      		  <img v-bind:src="suite.pic" aria-hidden="true" />
          </div>
    	</div>
      </div>
  	</section>
  </div>
</template>

<script>
export default {
    props:['suites', 'lang'],
      data () {
      return {
        }
      }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


/*SUITE TEXT*/

h3{
  font-size: 1.2em;
}

.suites{
  padding: 5px 0px;
  background-image: url(../assets/tile.png);
     
}
.suite{

}
.suiteDetails{
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-bottom: 10px;
}

.suites img{
  width: 100%;
  border-top: 1px solid #5A5A5A;
  padding-top: 10px;

}

a{
  font-weight: bold;
}


@media only screen /* iPhone 6, 6S, 7 and 8 */
  and (max-width: 500px)  {
  .suiteDetails{
    padding-top: 5px;
  }


  }

</style>
