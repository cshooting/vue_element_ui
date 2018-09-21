<template>
  <div>
    <h1>{{title}}</h1>
    <ul class="todos">
      <li>
        <el-input v-model="newTodo" placeholder="请输入待办事项" prefix-icon="el-icon-edit" class="input_size" @keyup.13.native="addItem()"></el-input>
        <el-button type="primary" @click="addItem()">添加</el-button>
      </li>
      <li v-for="(todo,index) in todos" :key="index">
        <label>{{index + 1}}.{{todo.value}}</label>
        <label>{{todo.created | date}}</label>
        <i class="el-icon-circle-close-outline" @click.prevent="delItem(index)"></i>
      </li>
    </ul>
  </div>

</template>
<script>
  import moment from "moment"
  import "moment/locale/zh-cn"
  moment.locale("zh-cn")
  export default {
    name: 'todolist',
    data() {
      return {
        newTodo: "",
        title: "todoList",
        todos: []
      }
    },
    filters:{
      date(val){
        return moment(val).calendar()
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
      delItem(index){
        this.todos.splice(index,1);
        
      }
    }
  };

</script>
<style scoped>
  .input_size {
    width: 300px;
  }
  li{
    list-style-type: none;
  }
</style>
