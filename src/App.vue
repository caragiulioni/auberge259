<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {

    }//end return 
  }//end data

};
</script>

<style>

/*global styles*/

html{
  scroll-behavior: smooth;
}

.wrapper{
  max-width: 90vw;
  margin: 0 auto;
}
body{
  margin:0;
  padding:0;
  background-color: #4C524F;
  color: #EAEAEA;
}

#app {
font-family: 'Muli', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
}

.wrapper{
  max-width: 90vw;
}

h1, h2, h3, h4, h5, p, a{
  margin: 0;
  padding: 0;
}
h1, h2 {
  font-weight: normal;
}

h2{
  font-size: 1.2em;
  font-weight: bold;
}
ul {
  list-style-type: none;
  padding: 0;
  margin:0;
}
li {
  display: inline-block;

}

button, a{
      cursor: pointer;
      color: #EAEAEA;
      text-decoration: none;
}

button{
  font-family: 'Muli', sans-serif;
  font-weight: bold;
}

.headings{
  padding: 25px 0px 25px 0px;
  border-bottom: 1px solid #5A5A5A;
  border-top: 1px solid #5A5A5A;
  background-color: #4C524F;
}
h2{
  text-align: center;
}
.margins{
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left:4vw;
  margin-right:4vw;
}

.button{
  display: flex;
  align-items: center;
  justify-content: center;
}

.button a, .submit{
  padding: 7px 30px;
  background-color: #F07159;
  border-radius: 4px;
  border: 1px solid #CE634D;
}

.button a:active, .submit:active{
  background:#B35643;
  border: 1px solid #8C4335;
}

@media only screen /* iPhone 6, 6S, 7 and 8 */
  and (max-width: 1100px)  {

p{
  font-size: .9em;

}
  }

@media only screen 
  and (max-width:850px)  {
    .button{


}

}
  
@media only screen /* iPhone 6, 6S, 7 and 8 */
  and (max-width: 800px)  {
  #app{
    font-size: .8em;
  }

  .button a, .submit{
  padding: 4px 20px;
  background-color: #F07159;
  border-radius: 4px;
}
  }

@media only screen /* iPhone 6, 6S, 7 and 8 */
  and (max-width: 500px)  {
  #app{
    font-size: .8em;
  }
  .margins{
margin: 0;

}



  }

</style>
