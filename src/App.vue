<template>
  <div id="app">
    <div class="head">
      <router-link to='/' exact>博客</router-link>
      <router-link to='/addblog' exact>写博客</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
  .head{
    max-width: 800px;
    background: firebrick;
    margin:0 auto;

    text-align: center;
    box-sizing: border-box;
}
  a{
   text-decoration: none;
    font-size: 20px;
    margin:0 10px;
    color: black;
    cursor: pointer;
    display: inline-block;
    padding: 20px 20px;
  }
  a:hover{
    background: greenyellow;
  }
  .router-link-active{
    background: #eee;
  }
</style>
