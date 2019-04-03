<template>
  <div>
    <h1>{{title}}</h1>
    <ul class="todos">
      <li>
        <el-input
          v-model="newTodo"
          placeholder="请输入待办事项"
          prefix-icon="el-icon-edit"
          class="input_size"
          @keyup.13.native="addItem()"
        ></el-input>
        <el-button type="primary" @click="addItem()">添加</el-button>
      </li>
      <li v-for="(todo,index) in todos" :key="index">
        <label>{{index + 1}}.{{todo.value}}</label>
        <label>{{todo.created | date}}</label>
        <i class="el-icon-circle-close-outline" @click.prevent="delItem(index)"></i>
      </li>
    </ul>
    <div class="table-wrap">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%;height: 100%"
        >
        <el-table-column prop="userName" label="用户名"></el-table-column>
        <el-table-column prop="roleName" label="角色"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="getRowData(scope.row)">获取行信息</el-button>
            <el-button type="success" size="small" v-if="scope.row.status == 2" @click="showDialog()">弹窗</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <role-dialog ref="roleDialog"></role-dialog>
  </div>
</template>
<script>
import moment from "moment";
import "moment/locale/zh-cn";
import roleDialog from "./roleDialog"
moment.locale("zh-cn");
export default {
  name: "todolist",
  components: {
    roleDialog
  },
  data() {
    return {
      newTodo: "",
      title: "todoList",
      todos: [],
      tableData: [
        {
          id: 1,
          userName: "admin",
          nickName: "超级管理员",
          roleName: "超管",
          roleId: 1,
          mobile: "15013797314",
          email: null,
          status: 2,
          areaList: "__vue_devtool_undefined__"
        },
        {
          id: 2,
          userName: "security",
          nickName: "安全员",
          roleName: "安全员",
          roleId: 2,
          mobile: "13712345678",
          email: null,
          status: 2,
          areaList: "__vue_devtool_undefined__"
        },
        {
          id: 19,
          userName: "审计",
          nickName: "<空>",
          roleName: "运营高管",
          roleId: 6,
          mobile: "18383098457",
          email: null,
          status: 2,
          areaList: "__vue_devtool_undefined__"
        },
        {
          id: 20,
          userName: "yy",
          nickName: "<空>",
          roleName: "审计员",
          roleId: 3,
          mobile: "18077519699",
          email: null,
          status: 0,
          areaList: "__vue_devtool_undefined__"
        },
        {
          id: 21,
          userName: "ee",
          nickName: "<空>",
          roleName: "运维高管",
          roleId: 4,
          mobile: "18077579699",
          email: null,
          status: 0,
          areaList: "__vue_devtool_undefined__"
        },
        {
          id: 24,
          userName: "运维普管",
          nickName: "<空>",
          roleName: "运维普管",
          roleId: 5,
          mobile: "18846111597",
          email: null,
          status: 2,
          areaList: "__vue_devtool_undefined__"
        }
      ]
    };
  },
  filters: {
    date(val) {
      return moment(val).calendar();
    }
  },
  methods: {
    addItem() {
      this.todos.push({
        value: this.newTodo,
        created: Date.now()
      });
      this.newTodo = "";
    },
    delItem(index) {
      this.todos.splice(index, 1);
    },
    getRowData(rowData){
      console.log(rowData)
    },
    showDialog(){
      this.$refs.roleDialog.open();
    }
  }
};
</script>
<style scoped>
.input_size {
  width: 300px;
}
li {
  list-style-type: none;
}
.table-wrap{
  width: 100%;
  height: 100%;
}
</style>
