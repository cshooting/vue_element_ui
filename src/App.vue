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
            <!-- <router-link to="pageOne" class="menuPos">pageOne</router-link>
            <router-link to="pageTwo" class="menuPos">pageTwo</router-link> -->
            <ul>
              <li v-for="(item,index) in routers" :key="index" class="menuPos">
                <router-link :to="{name:item.name}" class="menuPos">{{item.name}}</router-link>
                <ul>
                  <li v-for="(item,index) in item.children" :key="index" class="menuPos">
                    <router-link :to="{name:item.name}" class="menuPos">{{item.name}}</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </el-aside>
        <el-main>
          <!-- <div>{{msg | captial}}</div>
          <div>{{dollars | currency}}</div>
          <el-button type="primary" @click="sayName('cst')">点击</el-button> -->
          <router-view>
            <router-view></router-view>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Vue from "vue"
  import navBar from "./components/NavBar"
  import sideBar from "./components/sideBar"
  import axios from "axios"
  import router from "./router/router.js"
  import {
    getData,
    http
  } from "./index.js";

  Vue.prototype.$axios = axios;
  //Vue.prototype.$http = http;
  // 自定义过滤器
  Vue.filter("captial", function (val) {
    return val.toLowerCase();
  });
  Vue.filter("currency", function (val) {
    return val + "$";
  });

  export default {
    name: "app",
    components: {
      navBar,
      sideBar
      // "nav-bar": navBar,
      // "side-bar": sideBar
    },
    data() {
      return {
        msg: "Welcome",
        dollars: 100,
        routers: router
      };
    },
    methods: {
      sayName: function (name) {
        alert(name);
      }
    },
    created: function () {
      axios
        .get("https://easy-mock.com/mock/5b875eb8b762eb26e90eb971/test/example")
        .then(function (res) {
          console.log(res.data);
        });
      // var url = 'https://easy-mock.com/mock/5b875eb8b762eb26e90eb971/test/example';
      // var params = {
      //   a:1,
      //   b:2
      // }
      // getData(url);
      // http(url,'get',params)
      // .then(function(res){
      //   console.log(res);
      // })
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
    text-decoration: none;
    list-style-type: none;
    font-size: 18px;
    line-height: 44px;
    color: #fff;
  }

  .active {
    background: yellow;
    color: blue;
  }

</style>
