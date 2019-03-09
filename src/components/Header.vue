<template>
  <div class="header wrapper">
  	 <nav class="">
  		<ul> 	
	  		<li><router-link to="/" alt="French">FR</router-link></li>
	    	<li><router-link to="/EN" alt="English">EN</router-link></li>
	    	<li><a href="#Contact">CONTACT</a></li>
    	</ul> 
    </nav>
  	<div class="book"><a href="https://www.airbnb.ca/users/126452184/listings"><h2>{{ en.book }}</h2></a></div>
  	<div class="spacer"></div>
  </div>
</template>

<script>
export default {
    props:['en'],
      data () {
      return {

        }
      }

};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.image{
		background-image: url('../assets/suite201.jpg');
}

.header{
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	padding: 25px 0px;
}

.book a{
	text-decoration: none;
}

a{
color: #EAEAEA;
transition: .3s;
}

a:hover{
	color: #F07159;
}

nav{
}

h2{
	text-align: center;
}

ul{
	text-align: left;
}

li{
	font-size: 1.1em;
	padding: 0px 5px;
	font-weight: 200;
    text-decoration: underline;
}


@media only screen /* iPhone 6, 6S, 7 and 8 */
  and (max-width: 700px)  {
	h2{
		text-align: right;
	}

	.spacer{
		display: none;
	}
			
	.header{
		grid-template-columns: 1fr 1fr;
		padding: 15px;
	}

	ul{
		text-align: left;
	}

	nav{
		margin-top: 0;
	}
}
</style>
