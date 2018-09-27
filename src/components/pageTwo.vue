<template>
    <div>
      <el-button type = "primary" @click="change()">过渡动画</el-button>
      <transition name="box">
        <div v-if = "showBox" class= "box"></div>
      </transition>  
    </div>
</template>
<script>
export default {
  data:function(){
    return {
      showBox: true
    }
  },
  methods:{
    change(){
      this.showBox = !this.showBox;
    }
  }
};
</script>
<style scoped>
  .box{
    width: 100px;
    height:100px;
    background: #ff8282;
  }
  .box-enter-active{
    transition: all .8s;
  }
  .box-enter{
    opacity:1;
    margin-left:100%;
  }
  .box-leave-active{
    transition: all .8s;
    margin-right:100%;
  }
  .box-leave{
   
    
  }
  
</style>
