<template>
  <div class="">
  	<footer class="margins">
  		<div class="footer">
  			<p>© 2017 auberge 259</p>
  			<p>259 rue st-catherine east, montréal</p>
			<p>site par <a href="www.blockctrl.com">www.blockctrl.com</a></p>
		</div>
  	</footer>
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

footer{

}

.footer{
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
}

.footer p{
	text-align: center;
}

  a{
  color: #F07159;
  }
@media only screen /* iPhone 6, 6S, 7 and 8 */
  and (max-width: 500px)  {
.footer{
	padding: 5px 0px;
	grid-template-columns: 1fr;
}

.footer p{
	padding: 3px 0px;
}

  }


</style>
