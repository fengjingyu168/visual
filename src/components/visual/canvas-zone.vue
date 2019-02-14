<template>
  <div>
    <h5>操作区</h5>
    <div id='content'>

    </div>
  </div>

</template>
<script>
  import * as d3 from 'd3'

  export default {
    name: 'vue-line-chart',
    data() {
      return {
        svg: null, // 画布初始化
        ID: null, // 选择组件的id
        currentNode: [], //
        nodeMsg: [
          {ECS_ID: 'v1-1',linessssss: false, reflexive: false, image : 'img/ecs/ECS.svg',name:'ECS'},
          {ECS_ID: 'v1-2',linesss: false,  reflexive: true, image : 'img/ecs/云磁盘.svg',name:'云磁盘'},
          {ECS_ID: 'v2-1',linesss: false,  reflexive: true, image : 'img/ecs/RDS.svg',name:'RDS'},
          {ECS_ID: 'v2-2',linesss: false, reflexive: true, image : 'img/ecs/MongoDB.svg',name:'MongoDB'},
          {ECS_ID: 'v2-3',linesss: false,  reflexive: true, image : 'img/ecs/Redis.svg',name:'Redis'},
          {ECS_ID: 'v2-4',linesss: false,  reflexive: true, image : 'img/ecs/分析型数据库.svg',name:'分析型数据库'},
          {ECS_ID: 'v3-1',linesss: false,  reflexive: true, image : 'img/ecs/OSS Bucket.svg',name:'OSS Bucket'},
          {ECS_ID: 'v3-2',linesss: false,  reflexive: true, image : 'img/ecs/OSS资源包.svg',name:'OSS资源包'},
          {ECS_ID: 'v3-3',linesss: false,  reflexive: true, image : 'img/ecs/消息服务资源包.svg',name:'消息服务资源包'},
          {ECS_ID: 'v3-4',linesss: false,  reflexive: true, image : 'img/ecs/CDN资源包.svg',name:'CDN资源包'},
          {ECS_ID: 'v4-1',linesss: false,  reflexive: true, image : 'img/ecs/SLB.svg',name:'SLB'},
          {ECS_ID: 'v4-2',linesss: false,  reflexive: true, image : 'img/ecs/交换机.svg',name:'交换机'},
          {ECS_ID: 'v4-3',linesss: false,  reflexive: true, image : 'img/ecs/弹性公网IP.svg',name:'弹性公网IP'},
          {ECS_ID: 'v4-4',linesss: false,  reflexive: false, image : 'img/ecs/专有网络.svg',name:'专有网络'},
          {ECS_ID: 'v5-1',linesss: false,  reflexive: false, image : 'img/ecs/Web应用防火墙.svg',name:'Web应用防火墙'},
          {ECS_ID: 'v5-2',linesss: false,  reflexive: false, image : 'img/ecs/安骑士.svg',name:'安骑士'},
          {ECS_ID: 'v6-1',linesss: false,  reflexive: false, image : 'img/ecs/HTTPDNS资源包.svg',name:'HTTPDNS资源包'},
          {ECS_ID: 'v7-1',linesss: false,  reflexive: false, image : 'img/ecs/DRDS.svg',name:'DRDS'}
        ],
        nodes: [],
        lastNodeId: 2,
        links: [],
        force: null,
      }
    },
    mounted() {
      this.initSvg()
      this.force()
    },
    methods: {
      initSvg: function () {
        this.svg = d3.select('#content')
          .append('svg')
          .attr('oncontextmenu', 'return false;')
          .attr('width', '800')
          .attr('height', '450')

        this.svg.append('svg:defs').append('svg:marker')
          .attr('id', 'end-arrow')
          .attr('viewBox', '0 -5 10 10')
          .attr('refX', 6)
          .attr('markerWidth', 3)
          .attr('markerHeight', 3)
          .attr('orient', 'auto')
          .append('svg:path')
          .attr('d', 'M0,-5L10,0L0,5')
          .attr('fill', '#E5E5E5')

        this.svg.append('svg:defs').append('svg:marker')
          .attr('id', 'start-arrow')
          .attr('viewBox', '0 -5 10 10')
          .attr('refX', 4)
          .attr('markerWidth', 3)
          .attr('markerHeight', 3)
          .attr('orient', 'auto')
          .append('svg:path')
          .attr('d', 'M10,-5L0,0L10,5')
          .attr('fill', '#E5E5E5')

      },
      force: function () {
        this.force = d3.layout.force()
        //    .nodes(nodes)
        // .links(links)
          .size([800, 450])
          .linkDistance(150)
          .charge(-500)
          .on('tick', this.tick())
      },
      tick: function () {

      }
    },
  }
</script>
<style scoped>
  svg {
    margin: 25px
  }

  path {
    fill: none;
    stroke: #76BF8A;
    stroke-width: 3px;
  }

</style>
