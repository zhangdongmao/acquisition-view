<template>
  <div class="table">
    <div class="tool-bar">
      <div class="block"></div>
      <el-button class="tool-btn" type="primary" size="mini" @click="getSchema">获取</el-button>
    </div>
    <hr>
    <el-table
      :data="systemList"
      height="90%"
      style="width: 100%"
      @row-click="clickRow"
      ref="systemList"
      @selection-change="handleSelectionChange"
      :cell-style="cellStyle"
      :header-cell-style="headerCellStyle">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="businessSystemName"
        label="源系统名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="businessSystemNameShortName"
        label="源系统缩写"
        width="180"
        :filters="[{text: 'ERP', value: 'ERP'}, {text: 'DMS', value: 'DMS'}]"
        :filter-method="filterHandler">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name:'systemList',
    data () {
      var systemList=[
        {businessSystemName:'企业资源管理规划系统',
        businessSystemNameShortName:'ERP'},
        {businessSystemName:'云商DMS系统',
          businessSystemNameShortName:'DMS'},
        {businessSystemName:'云商CRM系统',
          businessSystemNameShortName:'CRM'},];
      var multipleSelection;
      return {
        systemList,
        multipleSelection,
        systemValue: '',
        fullscreenLoading: false,
      }
    },
    components:{
    },
    created(){
      // getSystemList
    },
    methods:{
      cellStyle({row, column, rowIndex, columnIndex}){
        return 'padding:3px;font-size:7px'
      },
      headerCellStyle({row, column, rowIndex, columnIndex}){
        return 'padding:3px;font-size:14px'
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      getSystemList(){
        var systemList=[
          {businessSystemName:'企业资源管理规划系统',
            businessSystemNameShortName:'ERP'},
          {businessSystemName:'云商DMS系统',
            businessSystemNameShortName:'DMS'},
          {businessSystemName:'云商CRM系统',
            businessSystemNameShortName:'CRM'},];
        this.$axios.post('/',)
          .then(response =>{

          })
      },
      getSchema(){
        var data=this.multipleSelection
        console.log(data)
        // this.$axios.post('/contrroller/test1',{
        //   data:data
        // })
        //   .then(response =>{
        //       console.log(response)
        //   })
          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          setTimeout(() => {
            loading.close();
          }, 2000);
        this.$message({
          message: '查询成功',
          type: 'error'
        });
        this.$refs.systemList.clearSelection();
      },
      clickRow(row){
        this.$refs.systemList.toggleRowSelection(row)
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.systemList.toggleRowSelection(row);
          });
        } else {
          this.$refs.systemList.clearSelection();
        }
      },
    }
  }
</script>
<style>
  .block{
    width: 50px;
    height: 10px;
  }
  .table{
    position: relative;
    height:100%;
  }
  .tool-btn{
    margin-right: 50px;
  }
  .tool-bar{
    position: relative;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
  }
  .search{
    position: relative;
    width: 280px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .pagination{
    position: fixed;
    margin-bottom: 20px;
  }
  .developList-expand {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .search-input{
    width: 60%;
  }
  .el-form-item{
    display: flex;
    flex-direction: row;
    text-align: left;
  }
  .el-form-item__label{
    color: #99a9bf;
    font-size: 10px;
  }
  .el-form-item__content {
    color: #99a9bf;
    font-size: 10px;
  }
</style>
