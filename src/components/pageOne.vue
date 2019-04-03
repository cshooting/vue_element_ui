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
            <el-button type="primary" @click="getRowData(scope.row)">获取行信息</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
export default {
  name: "todolist",
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
          areaList: "__vue_devtool_undefined__",
          authorityList: [
            {
              id: 1,
              authorityCode: "user_add",
              authorityName: "新增用户",
              authorityType: 1,
              description: null
            },
            {
              id: 2,
              authorityCode: "user_update",
              authorityName: "修改用户",
              authorityType: 1,
              description: null
            },
            {
              id: 3,
              authorityCode: "user_delete",
              authorityName: "删除用户",
              authorityType: 1,
              description: null
            },
            {
              id: 5,
              authorityCode: "user_lock",
              authorityName: "锁定用户",
              authorityType: 1,
              description: null
            },
            {
              id: 6,
              authorityCode: "user_unlock",
              authorityName: "解冻用户",
              authorityType: 1,
              description: null
            },
            {
              id: 7,
              authorityCode: "cmdb_query",
              authorityName: "CMDB查询",
              authorityType: 2,
              description: null
            },
            {
              id: 8,
              authorityCode: "cmdb_operate",
              authorityName: "CMDB操作",
              authorityType: 2,
              description: null
            },
            {
              id: 9,
              authorityCode: "monitor_query",
              authorityName: "监控查询",
              authorityType: 3,
              description: null
            },
            {
              id: 10,
              authorityCode: "monitor_operate",
              authorityName: "监控配置",
              authorityType: 3,
              description: null
            },
            {
              id: 12,
              authorityCode: "order_operate",
              authorityName: "操作工单",
              authorityType: 4,
              description: null
            },
            {
              id: 13,
              authorityCode: "message_add",
              authorityName: "发布消息",
              authorityType: 5,
              description: null
            },
            {
              id: 14,
              authorityCode: "message_query",
              authorityName: "查看消息",
              authorityType: 5,
              description: null
            },
            {
              id: 15,
              authorityCode: "message_delete",
              authorityName: "撤销消息",
              authorityType: 5,
              description: null
            },
            {
              id: 16,
              authorityCode: "security_start",
              authorityName: "启动巡检",
              authorityType: 6,
              description: null
            },
            {
              id: 17,
              authorityCode: "security_result",
              authorityName: "查看结果",
              authorityType: 6,
              description: null
            },
            {
              id: 18,
              authorityCode: "security_info",
              authorityName: "查看详情",
              authorityType: 6,
              description: null
            },
            {
              id: 19,
              authorityCode: "security_repair",
              authorityName: "启动修复",
              authorityType: 6,
              description: null
            }
          ]
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
          areaList: "__vue_devtool_undefined__",
          authorityList: [
            {
              id: 4,
              authorityCode: "user_check",
              authorityName: "审查用户",
              authorityType: 1,
              description: null
            },
            {
              id: 11,
              authorityCode: "order_check",
              authorityName: "审查工单",
              authorityType: 4,
              description: null
            },
            {
              id: 14,
              authorityCode: "message_query",
              authorityName: "查看消息",
              authorityType: 5,
              description: null
            }
          ]
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
          areaList: "__vue_devtool_undefined__",
          authorityList: [
            {
              id: 1,
              authorityCode: "user_add",
              authorityName: "新增用户",
              authorityType: 1,
              description: null
            },
            {
              id: 2,
              authorityCode: "user_update",
              authorityName: "修改用户",
              authorityType: 1,
              description: null
            },
            {
              id: 3,
              authorityCode: "user_delete",
              authorityName: "删除用户",
              authorityType: 1,
              description: null
            },
            {
              id: 5,
              authorityCode: "user_lock",
              authorityName: "锁定用户",
              authorityType: 1,
              description: null
            },
            {
              id: 6,
              authorityCode: "user_unlock",
              authorityName: "解冻用户",
              authorityType: 1,
              description: null
            },
            {
              id: 19,
              authorityCode: "security_repair",
              authorityName: "启动修复",
              authorityType: 6,
              description: null
            }
          ]
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
          areaList: "__vue_devtool_undefined__",
          authorityList: [
            {
              id: 7,
              authorityCode: "cmdb_query",
              authorityName: "CMDB查询",
              authorityType: 2,
              description: null
            },
            {
              id: 9,
              authorityCode: "monitor_query",
              authorityName: "监控查询",
              authorityType: 3,
              description: null
            },
            {
              id: 14,
              authorityCode: "message_query",
              authorityName: "查看消息",
              authorityType: 5,
              description: null
            },
            {
              id: 17,
              authorityCode: "security_result",
              authorityName: "查看结果",
              authorityType: 6,
              description: null
            },
            {
              id: 18,
              authorityCode: "security_info",
              authorityName: "查看详情",
              authorityType: 6,
              description: null
            }
          ]
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
          areaList: "__vue_devtool_undefined__",
          authorityList: [
            {
              id: 1,
              authorityCode: "user_add",
              authorityName: "新增用户",
              authorityType: 1,
              description: null
            },
            {
              id: 2,
              authorityCode: "user_update",
              authorityName: "修改用户",
              authorityType: 1,
              description: null
            },
            {
              id: 3,
              authorityCode: "user_delete",
              authorityName: "删除用户",
              authorityType: 1,
              description: null
            },
            {
              id: 5,
              authorityCode: "user_lock",
              authorityName: "锁定用户",
              authorityType: 1,
              description: null
            },
            {
              id: 6,
              authorityCode: "user_unlock",
              authorityName: "解冻用户",
              authorityType: 1,
              description: null
            },
            {
              id: 7,
              authorityCode: "cmdb_query",
              authorityName: "CMDB查询",
              authorityType: 2,
              description: null
            },
            {
              id: 8,
              authorityCode: "cmdb_operate",
              authorityName: "CMDB操作",
              authorityType: 2,
              description: null
            },
            {
              id: 9,
              authorityCode: "monitor_query",
              authorityName: "监控查询",
              authorityType: 3,
              description: null
            },
            {
              id: 10,
              authorityCode: "monitor_operate",
              authorityName: "监控配置",
              authorityType: 3,
              description: null
            },
            {
              id: 12,
              authorityCode: "order_operate",
              authorityName: "操作工单",
              authorityType: 4,
              description: null
            },
            {
              id: 13,
              authorityCode: "message_add",
              authorityName: "发布消息",
              authorityType: 5,
              description: null
            },
            {
              id: 14,
              authorityCode: "message_query",
              authorityName: "查看消息",
              authorityType: 5,
              description: null
            },
            {
              id: 15,
              authorityCode: "message_delete",
              authorityName: "撤销消息",
              authorityType: 5,
              description: null
            },
            {
              id: 16,
              authorityCode: "security_start",
              authorityName: "启动巡检",
              authorityType: 6,
              description: null
            },
            {
              id: 17,
              authorityCode: "security_result",
              authorityName: "查看结果",
              authorityType: 6,
              description: null
            },
            {
              id: 18,
              authorityCode: "security_info",
              authorityName: "查看详情",
              authorityType: 6,
              description: null
            },
            {
              id: 19,
              authorityCode: "security_repair",
              authorityName: "启动修复",
              authorityType: 6,
              description: null
            }
          ]
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
          areaList: "__vue_devtool_undefined__",
          authorityList: [
            {
              id: 7,
              authorityCode: "cmdb_query",
              authorityName: "CMDB查询",
              authorityType: 2,
              description: null
            },
            {
              id: 8,
              authorityCode: "cmdb_operate",
              authorityName: "CMDB操作",
              authorityType: 2,
              description: null
            },
            {
              id: 9,
              authorityCode: "monitor_query",
              authorityName: "监控查询",
              authorityType: 3,
              description: null
            },
            {
              id: 10,
              authorityCode: "monitor_operate",
              authorityName: "监控配置",
              authorityType: 3,
              description: null
            },
            {
              id: 12,
              authorityCode: "order_operate",
              authorityName: "操作工单",
              authorityType: 4,
              description: null
            },
            {
              id: 13,
              authorityCode: "message_add",
              authorityName: "发布消息",
              authorityType: 5,
              description: null
            },
            {
              id: 14,
              authorityCode: "message_query",
              authorityName: "查看消息",
              authorityType: 5,
              description: null
            },
            {
              id: 15,
              authorityCode: "message_delete",
              authorityName: "撤销消息",
              authorityType: 5,
              description: null
            },
            {
              id: 16,
              authorityCode: "security_start",
              authorityName: "启动巡检",
              authorityType: 6,
              description: null
            },
            {
              id: 17,
              authorityCode: "security_result",
              authorityName: "查看结果",
              authorityType: 6,
              description: null
            },
            {
              id: 18,
              authorityCode: "security_info",
              authorityName: "查看详情",
              authorityType: 6,
              description: null
            },
            {
              id: 19,
              authorityCode: "security_repair",
              authorityName: "启动修复",
              authorityType: 6,
              description: null
            }
          ]
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
