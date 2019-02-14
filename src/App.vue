<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: "微软雅黑", "Microsoft Yahei", Helvetica, "Lucida Grande", sans-serif;
  }
  /*控制消息提醒组件*/
  .ivu-message {
    z-index: 10000;
  }
  /*解决确认提示框被模态框遮挡问题*/
  .swal2-container {
    z-index: 10001;
  }
  li, ol {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  label {
    margin: 0;
  }
  .ivu-modal-mask{
    z-index: 3000;
  }
  .ivu-modal-wrap{
    z-index: 3000;
    top:4.7rem;
  }
  .modal-dialog{
    top: 15%
  }
</style>
