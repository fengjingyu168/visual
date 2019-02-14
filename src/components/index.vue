<style lang="less">
  .ivu-menu-opened .ivu-menu-submenu-title {
    background: #303133 !important;
    color: #fff !important;
  }
  .ivu-menu-opened .ivu-menu-submenu-title:hover {
    background: #303133 !important;
    color: #fff !important;
  }
  .ivu-menu-opened .ivu-menu .ivu-menu-item{
    background: #303133 !important;
    color: #fff !important;
    width: 200px;
  }
  .ivu-menu-submenu-title {
    color: #fff !important;
  }
  .ivu-menu-opened .ivu-menu .ivu-menu-item.ivu-menu-item-active{
    color: #fff;
    background: #0080FF !important;
  }
  .ivu-menu-opened .ivu-menu .ivu-menu-item:hover {
    background: #495060 !important;
  }
  .ivu-menu-opened .ivu-menu .ivu-menu-item.ivu-menu-item-active:hover {
    background: #0080FF !important;
  }
  .ivu-menu-submenu-title:hover {
    background: #495060 !important;
  }
</style>
<style lang="less" scoped>
  // 左侧菜单收起功能logo样式--开始
  .trigger-f {
    width: 36px;
    height: 36px;
    position: absolute;
    text-align: center;
    padding-top: 6px;
    border-radius: 10px;
    margin-left: 6px;
    background-color: #405060;
    color: white;
    top:185px;
  }
  // trigger区域样式
  .siber-trigger {
    text-align: center;
    height: 30px;
    padding: 3px 0;
  }
  .menu-icon{
    transition: all .3s;
  }
  .rotate-icon{
    transform: rotate(-90deg);
  }
  // 左侧菜单收起功能logo样式--结束

  .ol-inline-block {
    display: inline-block;
    float: right;
    line-height: 60px;
    padding: 0 18px;
    text-align: center;
    cursor: pointer;
    color: #fff;
  }
  .user-style {
    font-size: 14px;
    color: #1b6d85;
  }
  .fa-user-circle-o {
    vertical-align: middle;
    font-size: 25px;
  }
  .user-msg {
    position: absolute;
    right: 0;
    top: 60px;
    width:200px;
    padding-bottom: 6px;
    text-align: left;
    color: white;
    background-color: #262c30;
    z-index: 199;
    ul {
      padding: 0 0 16px;
      list-style: none;
      li {
        line-height: 32px;
        padding: 0 10px;
      }
    }
  }
  .user-info {
    font-size: 16px;
    background: #525151;
  }
  .sign-out {
    float: right;
  }
  .btn-sign-out {
    margin: 10px 0;
    a {
      border: 1px solid #b7b7b7;
      width: 63px;
      height: 28px;
      display: block;
      text-align: center;
      line-height: 26px;
      font-size: 12px;
      color: #b7b7b7;
      letter-spacing: 0;
      cursor: pointer;
    }
    a:hover{
      border-color: white;
      color: white;
    }
  }
  .layout{
    position: relative;
    overflow: hidden;
    min-width: 1000px;
  }

  .layout-logo {
    border-radius: 3px;
    float: left;
    overflow: hidden;
    margin: 0 20px;

    font-size: 16px;
    color: white;
    font-weight: 600;

    img{
      width: 120px
    }
  }
  /*当前位置信息样式*/
  .breadcrumb-f {
    background: rgb(246,246,246);
    padding-top: 2px;
    .breadcrumb {
      margin: 0;
    }
  }

  header {
    line-height: 34px;
    border: 1px solid #f5f7f9;
    padding-left: 5px;
    background-color: rgba(0,0,0,.05);
  }

  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }

  .ivu-layout, .ivu-layout-sider{
    background-color: #303133;
  }
  .body {
    flex-direction: initial; // 解决布局包含左侧菜单时上下排列问题
    .body-siderMenu {
      .ivu-layout-sider-children ul {
        width: 201px !important;  // 控制子菜单宽度
      }
    }
    .body-content {
      margin: 20px;
      /*margin-left: 24px;*/
      /*margin-right: 24px;*/
      min-height: 55rem;
    }
  }

  /*子菜单颜色*/
  .menuInfos {
    color: #757272;
  }

  /*菜单主题颜色*/
  .header-nav{
    padding-right: 20px;
  }
  .layout .top-menu{
    background: #000;
  }
  .layout .top-menu .ivu-menu-item{
    height: 60px;
    color: #fff;
  }
  .layout .top-menu .ivu-menu-item-active,.layout .top-menu .ivu-menu-item:hover{
    color: #fff;
    border-bottom: 3px solid #0080FF;
  }
  .body .body-siderMenu .ivu-menu-vertical{
    background: transparent;
  }
  .layout .body .body-siderMenu .ivu-menu .ivu-menu-item-active:not(.ivu-menu-submenu){
    // border-right: 3px solid #FFC261;
  }
  .ivu-layout {
    background-color: #F8F8F8;
    // flex-direction: row;
    /*.body-content {*/
      /*margin-top: 24px;*/
    /*}*/
  }
  .dot {
    background-color: #fff;
    height: 6px;
    width: 6px;
    margin-right: 3px;
    margin-left: 16px;
    margin-bottom: 2px;
    border-radius: 3px;
  }
  .iconimg {
    margin-right: 5px;
    margin-bottom: 2px;
    width:14px;
    height: 14px;
  }
  .ivu-menu-item-selected .dot{
    background-color: #fff;
  }
  /*收起状态下图标样式-开始*/
  .flex-container {
    display: flex;
    /*将 flex 项排成一列*/
    flex-direction: column;
    margin-top: 10px;
  }
  .flex-item {
    text-align: center;
    height: 40px;
    width:50px;
    padding: 10px 0;
    cursor: pointer;
    img{
      width:14px;
    }
  }
  /*收起状态下图标样式-结束*/

</style>
<template>
  <div class="layout">
    <Menu @on-select="changeView" mode="horizontal" :theme="theme" v-model="isCollapsed" :active-name="activename" class="top-menu">
      <div class="layout-logo" @click="changeView('ONE')">
        <img src="../assets/logo-jinke.png"/>
        招商金融云&nbsp;管理员门户
      </div>
      <!--<MenuItem>-->
      <!--招商金融云管理员门户-->
      <!--</MenuItem>-->
      <MenuItem name="ONE">
        <!-- <Icon type="model-s"></Icon> -->
        首页
      </MenuItem>
      <MenuItem name="TWO">
        <!-- <Icon type="plane"></Icon> -->
        资源池
      </MenuItem>
      <MenuItem name="THREE">
        <!-- <Icon type="ios-people"></Icon> -->
        订单计费
      </MenuItem>
      <MenuItem name="FOUR">
        <!-- <Icon type="jet"></Icon> -->
        运营维护
      </MenuItem>
      <MenuItem name="FIVE">
        <!-- <Icon type="nuclear"></Icon> -->
        云产品
      </MenuItem>
      <div class="ol-inline-block" v-if="userName !== null" :class="{'li-active':liActive}"
           @mouseover="showUserMsg(true)" @mouseout="showUserMsg(false)">
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        <template v-if="isShowUserMsg">
          <div class="user-msg">
            <ul>
              <li class="user-info">{{userName}}</li>
              <li class="sign-out">
                <div class="btn-sign-out" @click="loginout">
                  <a href="javascript:void(0);">退出</a>
                </div>
              </li>
            </ul>
          </div>
        </template>
      </div>
    </Menu>
    <Layout class="body">
      <Sider ref="side1" breakpoint="md" v-if="isPortal" collapsible :collapsed-width="0" hide-trigger v-model="isCollapsed" class="body-siderMenu">
        <div class="siber-trigger">
          <Icon @click.native="collapsedSider" :class="rotateIcon" type="navicon-round" color="#d7d7d7" size="24"></Icon>
        </div>
        <Menu :active-name="activeTitle" :open-names="openList" accordion @on-select="gotoPage" ref="side_menu">
          <Submenu v-for="(item,i) in menuInfos" :name="String(i)" :key="i">
            <template slot="title">
              <img :src="item.icon" class="iconimg">
              {{item.title}}
            </template>
            <MenuItem v-for="(menu,j) in item.menu" :name="menu.menuUrl" :key="j">
              <label class="dot"></label>
              {{menu.menuName}}
            </MenuItem>
          </Submenu>
        </Menu>
        <div slot="trigger"></div>
      </Sider>
      <Sider breakpoint="md" v-if="isCloseSiber && isPortal" :width="50" hide-trigger collapsible>
        <div class="siber-trigger">
          <Icon @click.native="collapsedSider" :class="rotateIcon" type="navicon-round" color="#d7d7d7" size="24"></Icon>
        </div>
        <div class="flex-container">
          <template v-for="(item,i) in menuInfos">
            <Tooltip placement="right" trigger="click" :content="item.title" :key="i">
              <div class="flex-item">
                <img :src="item.icon" @click="collapsedSider">
              </div>
            </Tooltip>
          </template>
        </div>
      </Sider>
      <Layout>
        <Content class="body-content">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import {cookies} from '@/common/cookieUtils'

  export default {
    data () {
      return {
        theme: 'dark',
        isCollapsed: false,
        isPortal: true, // 控制展开状态下-sider菜单显示
        isCloseSiber: false, // 控制收起状态下-sider菜单显示
        liActive: false,
        isShowUserMsg: false,
        userName: localStorage.getItem('username'),
        activename: '',
        activeTitle:'',
        openList:[],
        menuInfos: [],
        menus_new: {
          ONE: [{
            title: '首页',
            menu: [
              {
                menuName: '首页',
                menuUrl: 'portal',
                childMenu: []
              }
            ]
          }],
          TWO: [{
            title: '区域管理',
            icon: require('../assets/icons/area-manege.svg'),
            menu: [
              {
                menuName: '区域管理',
                menuUrl: 'regionsManage',
                childMenu: []
              },
              {
                menuName: '可用区管理',
                menuUrl: 'azsManage',
                childMenu: []
              },
              {
                menuName: '集群管理',
                menuUrl: 'clustersManage',
                childMenu: []
              },
              {
                menuName: '物理机管理',
                menuUrl: 'hostsManage',
                childMenu: []
              }
            ]
          }, {
            title: '资源统计',
            icon: require('../assets/icons/resource-cal.svg'),
            menu: [
              {
                menuName: '用户域统计',
                menuUrl: 'userStatistics',
                childMenu: []
              },
              {
                menuName: '区域统计',
                menuUrl: 'regionStatistics',
                childMenu: []
              }
            ]
          }, {
            title: 'NAS资源池',
            icon: require('../assets/icons/nas-resource.svg'),
            menu: [
              {
                menuName: 'NAS服务',
                menuUrl: 'nasService',
                childMenu: []
              },
              {
                menuName: 'NAS备份池',
                menuUrl: 'nasBackuppool',
                childMenu: []
              },
            ]
          },{
            title: 'OSS服务',
            icon: require('../assets/icons/oss-server.svg'),
            menu: [
              {
                menuName: 'OSS服务',
                menuUrl: 'ossServices',
                childMenu: []
              }
            ]
          },{
            title: '负载均衡',
            icon: require('../assets/icons/elb.svg'),
            menu: [
              {
                menuName: '实例关联',
                menuUrl: 'balanceInstance',
                childMenu: []
              },
              {
                menuName: '安全分区关联',
                menuUrl: 'balanceZone',
                childMenu: []
              }
            ]
          },{
            title: '云主机管理',
            icon: require('../assets/icons/ecs-manage.svg'),
            menu: [
              {
                menuName: '云主机类型管理',
                menuUrl: 'flavorsManage',
                childMenu: []
              },
              {
                menuName: '云主机类型Qos',
                menuUrl: 'flavorsQos',
                childMenu: []
              }
            ]
          },{
            title: 'DNS配置',
            icon: require('../assets/icons/network.svg'),
            menu: [
              {
                menuName: '租户域名',
                menuUrl: 'domainTenant',
                childMenu: []
              }
            ]
          }
          ],
          THREE: [{
            title: '订单',
            icon: require('../assets/icons/order-new.svg'),
            menu: [
              {
                menuName: '订单管理',
                menuUrl: 'orderManage',
                childMenu: []
              }
            ]
          },
          {
            title: '定价管理',
            icon: require('../assets/icons/price-manage.svg'),
            menu: [
              {
                menuName: '定价列表',
                menuUrl: 'catalogs',
                childMenu: []
              },
              {
                menuName: '定价参数配置',
                menuUrl: 'pricingFields',
                childMenu: []
              },
              {
                menuName: '优惠活动',
                menuUrl: 'promotion',
                childMenu: []
              },
              {
                menuName: '已发布活动',
                menuUrl: 'promotionRelease',
                childMenu: []
              },
            ]
          },
          {
            title: '账单管理',
            icon: require('../assets/icons/bill-manage.svg'),
            menu: [
              {
                menuName: '账单概览',
                menuUrl: 'billOverview',
                childMenu: []
              },
              {
                menuName: '账单明细',
                menuUrl: 'bilDetail',
                childMenu: []
              }
            ]
          }
          ],
          FOUR: [{
            title: '租户管理',
            icon: require('../assets/icons/tenant-manage.svg'),
            menu: [
              {
                menuName: '租户管理',
                menuUrl: 'tenantManage',
                childMenu: []
              },
              {
                menuName: '项目管理',
                menuUrl: 'projectManage',
                childMenu: []
              }
            ]
          },
          {title: '认证授权', icon: require('../assets/icons/auth.svg'),
            menu: [
              {
                menuName: '用户管理',
                menuUrl: 'usersManage',
                childMenu: []
              },
              {
                menuName: '策略管理',
                menuUrl: 'policiesManage',
                childMenu: []
              },
              {
                menuName: '策略项管理',
                menuUrl: 'policieItemManage',
                childMenu: []
              },
              {
                menuName: '授权模板',
                menuUrl: 'policieTemplates',
                childMenu: []
              },
              {
                menuName: 'AD域管理',
                menuUrl: 'userdomainsManage',
                childMenu: []
              },
            ]},
          {title: '日志', icon: require('../assets/icons/log.svg'),
            menu: [
              {
                menuName: '操作日志查询',
                menuUrl: 'logManage',
                childMenu: []
              }]
          }],
          FIVE: [{
            title: '计算',
            icon: require('../assets/icons/cal-new.svg'),
            menu: [
              {
                menuName: '云主机',
                menuUrl: 'ecsManage',
                childMenu: []
              },
              {
                menuName: '云主机镜像',
                menuUrl: 'ecsImages',
                childMenu: []
              },
              {
                menuName: '云主机快照',
                menuUrl: 'ecsSnapshot',
                childMenu: []
              }
            ]
          }, {
            title: '存储',
            icon: require('../assets/icons/storage.svg'),
            menu: [
              {
                menuName: '云磁盘',
                menuUrl: 'volumeManage',
                childMenu: []
              },
              {
                menuName: '云磁盘快照',
                menuUrl: 'volumeSnapshot',
                childMenu: []
              },
              {
                menuName: 'NAS',
                menuUrl: 'nasManage',
                childMenu: []
              },
              {
                menuName: '对象存储',
                menuUrl: 'ossBuckets',
                childMenu: []
              }
            ]
          }, {
            title: '网络',
            icon: require('../assets/icons/network.svg'),
            menu: [
              {
                menuName: 'VPC',
                menuUrl: 'vpc',
                childMenu: []
              },
              {
                menuName: '子网',
                menuUrl: 'subnet',
                childMenu: []
              },
              {
                menuName: 'VIP',
                menuUrl: 'vip',
                childMenu: []
              },
              {
                menuName: 'DNS',
                menuUrl: 'dns',
                childMenu: []
              },
              {
                menuName: '防火墙策略',
                menuUrl: 'firewallManage',
                childMenu: []
              },
              {
                menuName: '负载均衡',
                menuUrl: 'balanceLoad',
                childMenu: []
              },
              {
                menuName: 'EIP',
                menuUrl: 'eipManage',
                childMenu: []
              },
              {
                menuName: '弹性网卡',
                menuUrl: 'flexibleNetCardManage',
                childMenu: []
              }
            ]
          },
          {
            title: '数据库',
            icon: require('../assets/icons/db.svg'),
            menu: [
              {
                menuName: '云数据库',
                menuUrl: 'database',
                childMenu: []
              }
            ]
          }
          ]
        },
        menuControl: { // 左侧菜单显示控制
        },
        childToParent: {
          'ecsBuy': 'ecsManage'
        }
      }
    },
    computed: {
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ]
      },
      menuitemClasses: function () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    activated: function () {
    },
    created () {
      let currentPage = this.$route.name
      this.currentMenu(currentPage)
      this.updateMenu()
    },
    watch:{
      $route: function (){
        let currentPage = this.$route.name
        if (currentPage === 'portal') {
          this.isPortal = false
        } else {
          this.isPortal = true
        }
        this.currentMenu(currentPage)
      }
    },
    mounted () {
      this.isPortal = true
      let currentPage = this.$router.history.current.name
      if (currentPage === 'portal') {
        this.isPortal = false
      } else {
        this.isPortal = true
      }
    },
    methods: {
      /* 功能: 左侧菜单收起、展开动作
         实现：为避免菜单展开过程太过生硬，在菜单收起时收起二级菜单，
         在展开菜单后延时打开二级菜单
      */
      collapsedSider () {
        // if (this.isCollapsed) {
        //   let currentPage = this.$route.name
        //   this.currentMenu(currentPage)
        // } else {
        //   this.openList = []
        // }
        // this.$refs.side1.toggleCollapse()
        // let _this = this
        // setTimeout(
        //   _this.updateMenu, 300)

        if (this.isCollapsed) {
          this.isCloseSiber = false
          this.currentMenu_new()
        } else {
          this.isCloseSiber = true
          this.openList = []
        }
        this.$refs.side1.toggleCollapse()
        let _this = this
        setTimeout(_this.updateMenu_new, 300)

      },
      updateMenu_new () {
        this.$nextTick(() => {
          if(!this.$refs.side_menu){
            return
          }
          this.$refs.side_menu.updateOpened()
          this.$refs.side_menu.updateActiveName()
        })
      },
      updateMenu () {
        if(!this.$refs.side_menu){
          return
        }
        this.$nextTick(() => {
          this.$refs.side_menu.updateOpened()
          this.$refs.side_menu.updateActiveName()
        })
      },
      showUserMsg (res) {
        this.isShowUserMsg = res
      },
      changeView (val) {
        this.menuInfos = this.menus_new[val]
        if (val === 'ONE') {
          this.isPortal = false
        } else{
          this.isPortal = true
        }
        let url = this.menuInfos[0].menu[0].menuUrl
        this.activeTitle = url
        this.openList = ['0']
        this.$router.push({path: url})
        if(val !== 'ONE'){
          this.updateMenu()
        }
      },
      gotoPage (val) {
        this.$router.push({path: val})
      },
      // 定位当前title位置
      currentMenu () {
        // currentMenu (currentPage) {
        // for (let key in this.menus_new) {
        //   this.menus_new[key].forEach((item,index) => {
        //     item.menu.forEach((singleItem) => {
        //       if (currentPage === singleItem.menuUrl) {
        //         this.menuInfos = this.menus_new[key]
        //         this.activename = key
        //         this.activeTitle = currentPage
        //         this.openList = [String(index)]
        //         return
        //       }
        //     })
        //   })
        // }

        let currentPage = this.$route.name
        // 解决子页面在各种情况下需要定位到父菜单问题
        if (this.$validate.isEmpty(this.$route.meta)) {
          if (this.$validate.isEmpty(this.$route.meta.previousMenu)) {
            currentPage = this.$route.meta.previousMenu
          }
        }
        let _this = this
        for (let key in this.menus_new) {
          this.menus_new[key].forEach((item,index) => {
            item.menu.forEach((singleItem) => {
              if (currentPage === singleItem.menuUrl) {
                this.menuInfos = this.menus_new[key]
                this.activename = key
                this.activeTitle = currentPage
                this.openList = [String(index)]
                setTimeout(_this.updateMenu_new, 300)
                return
              }
            })
          })
        }

      },
      // 定位当前title位置
      currentMenu_new () {
        let currentPage = this.$route.name
        // 解决子页面在各种情况下需要定位到父菜单问题
        if (this.$validate.isEmpty(this.$route.meta)) {
          if (this.$validate.isEmpty(this.$route.meta.previousMenu)) {
            currentPage = this.$route.meta.previousMenu
          }
        }
        let _this = this
        for (let key in this.menus_new) {
          this.menus_new[key].forEach((item,index) => {
            item.menu.forEach((singleItem) => {
              if (currentPage === singleItem.menuUrl) {
                this.menuInfos = this.menus_new[key]
                this.activename = key
                this.activeTitle = currentPage
                this.openList = [String(index)]
                setTimeout(_this.updateMenu_new, 300)
                return
              }
            })
          })
        }
      },
      loginout () {
        localStorage.username = ''
        this.$Message.success('已登出!')
        this.httpRequest({
          method: 'POST',
          url: '/v1/logout'
        }).then(response => {
          console.log(response)
          this.$router.push({path: '/login'})
//          if (response.status <= 403) {
//            cookies.deleteAuthorization()
//            localStorage.username = ''
//            this.$Message.success('已登出!')
//            this.$router.push({path: '/login'})
//          }
        })
        cookies.deleteAuthorization()
      },
    }
  }
</script>
