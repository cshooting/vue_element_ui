import pageOne from "../components/pageOne"
import pageTwo from "../components/pageTwo"
const routers = [{
    path: '/',
    redirect:'/pageOne'
  },
  {
    path: '/pageOne',
    name: 'pageOne',
    component: pageOne
  },
  {
    path: '/pageTwo',
    name: 'pageTwo',
    component: pageTwo
  }
]

export default routers
