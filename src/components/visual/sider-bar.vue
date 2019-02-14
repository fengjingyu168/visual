<template>
  <div class="sider-bar">
    物料区
    <div class="row">
      <ul id="configSetting" class="nav nav-list secondmenu collapse in">
        <li style="display: inline-block;padding: 6px;">
          <img src="../../assets/img/ecs/ECS.svg" class="menu-img" draggable="true" alt="">
          <span class="menu-text">ECS</span>
        </li>
        <li style="display: inline-block;padding: 6px;">
          <img src="../../assets/img/ecs/云磁盘.svg" class="menu-img" draggable="true" alt="">
          <span class="menu-text">云磁盘</span>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
  import '../../assets/css/menu.css'
  import '../../assets/css/bootstrap.css'
  import '../../assets/css/app.css'

  export default {
    name: 'sider-bar',
    data() {
      return {}
    },
    mounted() {

    },
    methods: {},
    components: {}
  }
</script>

<style scoped>
  .sider-bar {
    padding: 30px;
  }
  .menu-img {
    width: 32px;
  }

  .menu-img {
    width: 32px;
  }

  .menu-text {
    font-size: 12px;
    display: block;
    font-weight: 500;
  }
</style>
