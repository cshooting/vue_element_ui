<template>
    <div class="nav-bar">
        <div class="left-area">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
        <div class="right-area">
            <div><i class="el-icon-setting size"></i></div>
            <div><i class="el-icon-time size"></i></div>
            <div><i class="el-icon-star-on size"></i></div>
        </div>
    </div>
</template>
<script>
export default {
  // name: 'NavBar'
};
</script>
<style>
.left-area {
  width: 150px;
  height: 60px;
  padding-left: 20px;
  float: left;
}
.right-area {
  width: 180px;
  height: 60px;
  float: right;
}
.size {
  float: left;
  font-size: 30px;
  padding: 15px 0 15px 15px;
}
</style>
