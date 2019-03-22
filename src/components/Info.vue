<template>
<div class=" infoMain margins">
	<section class="info wrapper">
	  	<div class="">
			<div class="iconsStyle iconsText">
				<div class="iconsStyleSub">
					<div class="subInner"><i class="fas fa-wifi"></i><p>{{ lang.wifi }}</p></div>
					<div class="subInner"><i class="fas fa-utensils"></i><p>{{ lang.kitchen }}</p></div>
				</div>
				<div class="iconsStyleSub iconsText">
					<div class="subInner"><i class="fas fa-laptop"></i><p>{{ lang.workspaces }}</p></div>
					<div class="subInner"><i class="far fa-snowflake"></i><p>{{ lang.ac }}</p></div>
				</div>
			</div>
	  	</div>

	  	<div class="iconsText">
			<div class="">
				<div class="">
					<div class="text"><p>{{ lang.text1 }}</p></div>
				</div>
			</div>
	  	</div>
    </section>

   <div class="info  wrapper">
	  	<div class="iconsText">
			<div class="">
				<div class="text"><p>{{ lang.text2 }}</p></div>
			</div>
	  	</div>
	  		  	<div class="iconsText">
			<div class="">
				<div class="text"><p>{{ lang.text3 }}</p></div>
			</div>
	  	</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props:['lang'],
      data () {
      return {
        }
      }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

i{
	font-size: .8em;
	margin-top: 3px;
}




.info{
	display: grid;
	grid-template-columns: 1fr 1fr;	
	grid-column-gap: 2vw;
	margin: 2vh;

}
.iconsStyle{
	display: grid;
	grid-template-columns: 1fr 1fr;
}

.iconsStyleSub{
	font-size: 1.2em;
}

.subInner{
	display: grid;
	grid-template-columns: 1fr 8fr;	
}
.margins{
  margin-left:5vw;
  margin-right:5vw;
}

.spacer{
	height: 2px;
	background-image: url("../assets/tile.png");
}

@media only screen /* iPhone 6, 6S, 7 and 8 */
  and (max-width: 900px)  {
  	.info{
  		grid-template-columns: 1fr;	

	}

	.text{
		margin-top: 10px;
	}
	.iconStyle{
		margin: 0 auto;
	  }

}

</style>
