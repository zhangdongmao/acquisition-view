import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'
import GetSourceSystemSchema from '@/view/initSourceMetadata/GetSourceSystemSchema'
import GetTabColInfo from '@/view/initSourceMetadata/GetTabColInfo'
import CreateODSTable from '@/view/createTables/CreateODSTable'
import CreateDWTable from '@/view/createTables/CreateDWTable'
import GenerateODSScript from '@/view/generateScript/GenerateODSScript'
import GenerateDWScript from '@/view/generateScript/GenerateDWScript'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {path:'/getTabColInfo',name:'GetTabColInfo',component:GetTabColInfo},
        {path:'/getSourceSystemSchema',name:'GetSourceSystemSchema',component:GetSourceSystemSchema},
        {path:'/createODSTable',name:'CreateODSTable',component:CreateODSTable},
        {path:'/createDWTable',name:'CreateDWTable',component:CreateDWTable},
        {path:'/generateODSScript',name:'GenerateODSScript',component:GenerateODSScript},
        {path:'/generateDWScript',name:'GenerateDWScript',component:GenerateDWScript},
      ]
    }
  ]
})
