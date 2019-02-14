<template>
    <div id="app">
        <div class="flex-container">
            <div class="flex-item">
                <siderBar></siderBar>
            </div>
            <div class="flex-item">
                <canvasZone></canvasZone>
            </div>
        </div>
    </div>
</template>

<script>
    import siderBar from './visual/sider-bar.vue'
    import canvasZone from './visual/canvas-zone.vue'

    export default {
      name: 'app',
      components: {
        siderBar,
        canvasZone
      }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .flex-container {
        display: flex;
        flex-direction: row;
        height: 500px;
        /*background-color: #F0f0f0;*/
    }
    /* 以下为辅助样式 */

    .flex-container .flex-item{
        /*background-color: #B1FF84;*/
    }
    .flex-container .flex-item:first-child{
        background-color: #F5DE25;
        width:20%
    }
    .flex-container .flex-item:last-child{
        background-color: #ececec;
        width:80%
    }
</style>
