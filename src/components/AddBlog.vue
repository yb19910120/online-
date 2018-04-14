<template>
  <div class="addblog">
    <h1>添加博客</h1>
    <form v-on:submit="addBlog">
      <h3>博客标题</h3>
      <input type="text" v-model="blog.title"/>
      <h3>博客内容</h3>
      <textarea rows="16" cols="84"v-model="blog.context"></textarea>

      <div class="checkboxes">
        <label>vue.js</label>
        <input type="checkbox" value="vue.js" v-model="blog.type"/>
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.type"/>
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.type"/>
        <label>Angular.js</label>
        <input type="checkbox" value="Angular.js"v-model="blog.type"/>
      </div>
      <label>作者:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">
                      {{author}}
        </option>
      </select>
      <button type="submit">添加博客</button>
    </form>

    <div class="blogview">
      <h2>博客总览</h2>
      <p>博客标题:{{blog.title}}</p>
      <p>博客内容:{{blog.context}}</p>
      <p>博客分类:<ul><li v-for="blogtp in blog.type">{{blogtp}}</li></ul></p>
      <p>博客作者:{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addblog',
  data () {
    return {
         blog:{
           title:'',
           context:'',
           type:[],
           author:'Young'
         },
      authors:['Young','孙悟空','猪八戒','唐僧']
    }
  },
  methods:{

    addBlog(e){

        this.$http.post('http://localhost:3000/user',this.blog)
          .then(function (data) {
            console.log(data);
            this.$router.push({path:'/',query:{alert:'发布博客成功!!!!'}})
          })
     e.preventDefault()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addblog{
  max-width: 600px;
  margin: 0px auto;
}
  label{
    display: block;
    font-family: Arial Black;
  }
  .checkboxes label{
    display: inline-block;
  }
  input[type='text']{
    width: 100%;
    height: 30px;
  }
  select{
    width: 100%;
    height: 20px;
    margin-top: 15px;
  }
  button{
    margin-top: 10px;
    padding: 10px 10px;
    background: firebrick;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
  }
</style>
