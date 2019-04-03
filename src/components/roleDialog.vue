<template>
  <el-dialog :visible.sync="visible" width="500px" title="弹窗">
    <div>提示文本</div>
    <div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="visible = false">确 定</el-button>
      </span>
    </div>
  </el-dialog>
</template>
<script>
    export default {
        data(){
            return {
                visible:false
            }
        },
        methods:{
            open(){
                this.visible = true
            }
        }
    };
</script>
<style>
</style>
