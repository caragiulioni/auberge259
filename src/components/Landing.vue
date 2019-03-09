<template>
  <div class="landing">
    <div class="banner">
    	<img src="../assets/banner.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
    props:[],
      data () {
      return {
        }
      }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.landing{
	background-image: url('../assets/hero.jpg');
	background-position: center;
	background-size: cover;
	height: 90vh;
}

.banner{
	display: grid;
	grid-auto-columns: 1fr;
	align-items: center;
}
.banner img{
	width: 25%;
	margin: 0 auto;
}

@media only screen 
  and (max-width: 1024px)  {
.banner img{
width: 35%;
}

}

@media only screen 
  and (max-width: 850px)  {
.banner img{
width: 25%;
}
  
  }


@media only screen 
  and (max-width: 500px)  {
.banner img{
width: 50%;
}
  
  }
</style>
