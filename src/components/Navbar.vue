<template>
  <el-row>
    <el-col :span="24">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo "
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <!--<el-menu-item index="1">处理中心</el-menu-item>-->
        <!--<el-submenu index="option">-->
          <!--<template slot="title">操作</template>-->
          <!--<el-menu-item index="getMetaData">查询元数据</el-menu-item>-->
          <!--<el-menu-item index="2-2">查询数据量</el-menu-item>-->
          <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
          <!--<el-submenu index="2-4">-->
            <!--<template slot="title">选项4</template>-->
            <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
            <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
            <!--<el-menu-item index="2-4-3">选项3</el-menu-item>-->
          <!--</el-submenu>-->
        <!--</el-submenu>-->
        <el-container class="logo-size">
          <div id="logo">
            <img id="img" src="../../static/logo.png" width="80" height="60"/>
          </div>
          <div id="logo-font">
            <span >自动化平台</span>
          </div>
        </el-container>
        <el-menu-item index="3">个人中心</el-menu-item>
        <!--<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->

      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
  import eventBus from '@/assets/eventBus.js'
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        tableList:111
      }
    },
    mounted(){
      // eventBus.$on('to-getMetaData',data=> {
      //   this.tableList=data
      // })
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        if(keyPath[0]=='option' && keyPath[1] == 'getMetaData'){
        }
      },

    }
  }
</script>
<style scoped>
  /deep/ .el-menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    border: 0;
    height: 7%;
  }

  /deep/ .el-menu-item {
    position: relative;
    height: 100%;
  }

  /deep/ .el-submenu {
    position: relative;
    height: 100%;
  }
  .logo-size{
    margin-left: 10px;
    margin-top: 10px;
  }
  #logo-font{
    color: white;
    font-size: 30px;
    font-weight: 900;
    margin-top: 15px;
    margin-left: 5px;
  }
</style>
