<template>
  <div class="showblog" v-them:cols="'width'">
    <h4>{{this.alert=this.$route.query.alert}}</h4>
    <h1>博客总览</h1>
    <input type="text" placeholder="请输入搜索的博客标题" v-model="inputtext"/>
    <div class="blogshow" v-for="blogs in filterBlog(blog,inputtext)">
             <router-link v-bind:to="'/showdata/'+blogs.id"><h4 v-titlecolor>{{blogs.title}}</h4></router-link>
             <article>{{blogs.context | atslice}}</article>
    </div>

  </div>
</template>

<script>
export default {
  name: 'showblog',
  data () {
    return {
       blog:[],
      inputtext:'',
      alert:''
    }
  },
  methods:{
    getBlogData(){
      this.$http.get('http://localhost:3000/user')
            .then(function (data) {
             this.blog = data.body

              //console.log(this.blog);
            })
    },
    filterBlog(blog,value){
      return blog.filter(function (bl) {
        return bl.title.match(value)
      })
    }
  },
  created(){
    this.getBlogData()
  },
  computed:{
    /*filterBlog(){
      return this.blog.filter( (bl)=> {
        //console.log(bl);
        return bl.title.match(this.inputtext)
      })*/
    //}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.showblog{
  box-sizing: border-box;
  max-width: 800px;
  margin: 0 auto;
}
.blogshow {
  border: 1px dotted #eee;
  margin-top: 15px;
  background: beige;
}
input{
  width: 100%;
  height: 20px;
}

</style>
