<template>
	<div class="button">
	  <button class="submit" id="submit_button" type="submit" value="send email">{{ lang.submit }}</button>
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

  button{
 
        font-weight: bold;

  }
  
  .button{
    margin: 10px;
    font-weight: bold;
  }


</style>
