<template>
  <div id="app">
    <el-container>
      <el-header>
        <nav-bar />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <side-bar />
          <div class="menu">
            <router-link to="pageOne" class="menuPos">pageOne</router-link>
            <router-link to="pageTwo" class="menuPos">pageTwo</router-link>
          </div>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Vue from "vue";
  import NavBar from "./components/NavBar";
  import sideBar from "./components/sideBar";
  import axios from "axios"

  Vue.prototype.$axios = axios;

  export default {
    name: "app",
    components: {
      "nav-bar": NavBar,
      "side-bar": sideBar
    },
    data() {
      return {
        msg: "Welcome"
      };
    },
    created:function(){
      axios.get('https://easy-mock.com/mock/5b875eb8b762eb26e90eb971/test/example')
      .then(function(res){
        console.log(res.data);
      })
    }
  };

</script>

<style>
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    background: #f1f2f7;
  }

  #app {
    height: 100%;
  }

  .el-container {
    width: 100%;
    height: 100%;
  }

  .el-header {
    padding: 0px;
    background-color: #fff;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    background-color: #556d84;
    color: #fff;
    text-align: center;
  }

  .el-main {
    color: #333;
    text-align: center;
    height: 100%;
  }

  .menuPos {
    display: block;
    text-decoration: none;
    color: #fff;
  }

</style>
