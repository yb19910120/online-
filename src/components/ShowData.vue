<template>
  <div class="showdata">
          <button><router-link v-bind:to="'/edit/'+blog.id">编辑</router-link></button>
          <button v-on:click="deleteBlog">删除</button>
         <h2>{{blog.title}}</h2>
         <article>{{blog.context}}</article>
  </div>
</template>

<script>
  export default {
    name: 'showdata',
    data () {
      return {
        blog:[]
      }
    },
    methods:{
      showData(id){
        this.$http.get('http://localhost:3000/user/'+id)
          .then(function (data) {
           // console.log(data);
            this.blog = data.body
          })
      },
      deleteBlog(){
        this.$http.delete('http://localhost:3000/user/'+this.blog.id)
              .then(function () {
                this.$router.push({path:'/',query:{alert:'删除博客成功！！！'}})
              })
      }
    },
    created(){
      this.showData(this.$route.params.id)
     // console.log(this.$route.params.id);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.showdata{
  max-width: 800px;
  background: lightpink;
  margin: 0 auto;
}
</style>
