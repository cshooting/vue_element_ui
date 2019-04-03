import pageOne from "../components/pageOne"
import pageTwo from "../components/pageTwo"
// import detil from "../components/detil.vue"
const routers = [{
    path: '/',
    redirect:'/pageOne'
  },
  {
    path: '/pageOne',
    name: 'pageOne',
    component: pageOne,
    // children:[{
    //   path:'detil',
    //   name:'detil',
    //   component: detil
    // }]
  },
  {
    path: '/pageTwo',
    name: 'pageTwo',
    component: pageTwo,
  }
]

export default routers
