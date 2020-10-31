import Home from '../pages/Dashboard/Home';

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    component: '../layouts',
    routes: [
      { path: '/dashboard', redirect: '/dashboard/home',},
      {
        path: '/dashboard/home',
        name: '首页',
        icon: 'smile',
        component: '../pages/Dashboard/Home',
        id: 1,
      },
    ]
  }
]

export default routes;