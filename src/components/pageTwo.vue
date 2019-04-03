<template>
  <div>
    <el-button type="primary" @click="change()">过渡动画</el-button>
    <transition name="box">
      <div v-if="showBox" class="box"></div>
    </transition>
    <div class="wrap">
      <div class="wrap-contain">
        <span class="input-title">姓名：</span>
        <el-input class="inputStyle" placeholder="请输入内容" v-model="inputData"></el-input>
      </div>
      <div class="wrap-contain">
        <span class="input-title">兴趣爱好：</span>
        <el-input class="inputStyle" placeholder="请输入内容" v-model="inputData"></el-input>
      </div>
      <div class="wrap-contain">
        <span class="input-title">种类：</span>
        <el-select v-model="value" placeholder="请选择" class="inputStyle">
          <el-option
            v-for="item in roleData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="wrap-contain">
        <span class="input-title">selectVal:</span>
        <span>{{value}}</span>
      </div>
      <div class="tree-wrap">
        <el-tree
          ref="authorityTree"
          :data="authorityData"
          show-checkbox
          node-key="id"
          default-expand-all>
        </el-tree>
      </div>
      <el-button type="primary" @click="getTreeKey()">获取树节点</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      showBox: true,
      inputData: "",
      roleData: [
        { label: "审计员", value: 3 },
        { label: "运维高级管理员", value: 4 },
        { label: "运维普通管理员", value: 5 },
        { label: "运营高级管理员", value: 6 },
        { label: "运营普通管理员", value: 7 }
      ],
      value: "",
      authorityData: [
        {
          id: "all",
          label: "全选",
          disabled: false,
          children: [
            {
              id: "cmdb",
              label: "CMDB",
              disabled: false,
              children: [
                { label: "CMDB查询", id: 7, disabled: true },
                { label: "CMDB操作", id: 8, disabled: false }
              ]
            },
            {
              id: "monitor",
              label: "监控",
              disabled: false,
              children: [
                { label: "监控查询", id: 9, disabled: true },
                { label: "监控配置", id: 10, disabled: false }
              ]
            },
            {
              id: "order",
              label: "工单",
              disabled: false,
              children: [{ label: "操作工单", id: 12, disabled: false }]
            },
            {
              id: "message",
              label: "消息",
              disabled: false,
              children: [
                { label: "发布消息", id: 13, disabled: false },
                { label: "查看消息", id: 14, disabled: true },
                { label: "撤销消息", id: 15, disabled: false }
              ]
            },
            {
              id: "security",
              label: "安全",
              disabled: false,
              children: [
                { label: "启动巡检", id: 16, disabled: false },
                { label: "查看结果", id: 17, disabled: true },
                { label: "查看详情", id: 18, disabled: false },
                { label: "启动修复", id: 19, disabled: false }
              ]
            }
          ]
        }
      ],
      treeKeys: []
    };
  },
  methods: {
    change() {
      this.showBox = !this.showBox
    },
    setDefaultKey(){
      this.$refs.authorityTree.setCheckedKeys([7,9,14,17])
    },
    getTreeKey(){
      this.treeKeys = this.$refs.authorityTree.getCheckedKeys(true)
      console.log(this.treeKeys)
    }
  },
  mounted(){
    this.setDefaultKey();
  }
};
</script>
<style scoped>
.box {
  width: 100px;
  height: 100px;
  background: #ff8282;
}
.box-enter-active {
  transition: all 0.8s;
}
.box-enter {
  opacity: 1;
  margin-left: 100%;
}
.box-leave-active {
  transition: all 0.8s;
  margin-right: 100%;
}
.box-leave {
}
.wrap {
  width: 500px;
  height: 600px;
  border: 1px solid royalblue;
}
.wrap-contain {
  margin: 20px;
}
.input-title {
  display: inline-block;
  width: 100px;
  text-align: right;
}
.inputStyle {
  display: inline-block;
  width: 300px;
}
.tree-wrap{
  display: block;
  width: 300px;
  height: 300px;
  overflow: auto;
}
</style>
