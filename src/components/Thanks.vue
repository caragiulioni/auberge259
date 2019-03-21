<template>
<div>
	<headerbar v-bind:lang="lang"></headerbar>
  	<div class="thanks">
  		<div class="thanksText">
  			<p>Merci. Nous reviendrons vers vous sous peu.</p>
  			<p>Thanks. We will get back to you shortly.</p>
  			<div class="button"><a href="www.auberge259.com">Auberge 259</a></div>
  		</div>
	</div>
	<footerinfo></footerinfo>
</div>
</template>

<script>
export default {
    props:[],
      data () {
      return {
      	lang:{
        book: 'réservez maintenant'
		      }

        }
      }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.thanks{
height: 78vh;
display: flex;
align-items: center;
justify-content: center;
 background-image: url(../assets/tile.png);
	
}
.thanksText{
	background-color: #4C524F;
	padding: 25px;

}

p{
	margin: 10px 0px;
	font-size: .9em;
	text-align: center;
}
</style>
