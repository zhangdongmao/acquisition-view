<template>
  <div class="table">
    <div class="tool-bar">
      <div class="tool-select">
        <el-select v-model="systemValue" placeholder="请选择业务系统" size="mini">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="schemaValue" placeholder="请选择数据模式" size="mini">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <el-button class="tool-btn" type="primary" size="mini">建表</el-button>
    </div>
    <hr>
    <el-table
      :data="schemaList"
      height="90%"
      style="width: 100%"
      @row-click="clickRow"
      ref="schemaList"
      @selection-change="handleSelectionChange"
      :cell-style="cellStyle"
      :header-cell-style="headerCellStyle">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="businessSystemNameShortName"
        label="源系统缩写"
        width="180"
        :filters="[{text: 'mysql', value: 'mysql'}, {text: 'oracle', value: 'oracle'}]"
        :filter-method="filterHandler">
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true"
                       prop="sysAbbreviation"
                       label="数据模式"
                       width="180">
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true"
                       prop="sysAbbreviation"
                       label="表名"
                       width="180">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import eventBus from '@/assets/eventBus.js'
  export default {
    name:'schemaList',
    data () {
      var schemaList=[];
      var multipleSelection;
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        systemValue: '',
        schemaValue: '',
        schemaList,
        multipleSelection,
      }
    },
    components:{
    },
    created(){

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
      getMetaDataList(){
        this.$axios.post('',)
          .then(response =>{

          })
      },
      clickRow(row){
        this.$refs.schemaList.toggleRowSelection(row)
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        eventBus.$emit('to-getDataVolume',this.multipleSelection)
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.schemaList.toggleRowSelection(row);
          });
        } else {
          this.$refs.schemaList.clearSelection();
        }
      },
    }
  }
</script>
<style>
  .table{
    position: relative;
    height:100%;
  }
  .tool-select{

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
