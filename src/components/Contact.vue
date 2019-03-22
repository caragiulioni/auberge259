<template>
  <div class="contact">
  	<section>
  		<div class="headings"><a name="Contact"><h2>Contact</h2></a></div>
  			<div class="contactForm">
				<form id="contact_form" action="http://www.focuspocus.io/magic/johnhatzmtl@gmail.com" method="POST" enctype="multipart/form-data">
					<div class="inputs">
						<label for="name">{{ lang.name }}</label><br />
						<input id="name" class="input" name="name" type="text" value="" size="30" required oninvalid="this.setCustomValidity('Votre nom SVP / Your name please')" oninput="this.setCustomValidity('')" /><br />
					</div>	
					<div class="inputs">
						<label for="email">{{ lang.email }}</label><br />
						<input id="email" class="input" name="email" type="text" value="" size="30" required oninvalid="this.setCustomValidity('Votre email SVP / Your email please')" oninput="this.setCustomValidity('')" /><br/>
					</div>
					<div class="inputs">
						<label for="message">{{ lang.message }}</label><br />
						<textarea id="message" class="input" name="message" required oninvalid="this.setCustomValidity('Votre message SVP / Your message please')" oninput="this.setCustomValidity('')" ></textarea><br />
					</div>
					<div class="">
						<submit v-bind:lang="lang"></submit>
					</div>
				</form>	
				<div class="text contactText">
					<p>{{ lang.contactText }}</p>
				</div>
			</div>
  	</section>
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

a{
	font-size: 	1em;
}
section{
	background: url("../assets/tile.png");
}

.inputs, {
	margin: 5px 0px;
}

.contactForm{
	padding: 25px 0px;
	width: 300px;
	background-color: #4C524F;
	border: 1px solid #5A5A5A;
	border-radius: 3px;
	margin: 0 auto;
}


.contactText{
	margin: 25px 25px;
}

input{
	width: 250px;
}

button{
	background: transparent;
	border: none;
}

textarea{
	width: 250px;
}

form{
display: flex;
flex-direction: column;
align-items: center;
}


@media only screen /* iPhone 6, 6S, 7 and 8 */
  and (max-width: 500px)  {
	.contactText{
		margin: 15px 15px;
	}

	.contactForm {
	     padding: 5px 0px; 

	}
}

</style>
