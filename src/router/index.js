import {createRouter, createWebHashHistory} from "vue-router";
import Login from "@/pages/User/Login";
import HomePage from "@/pages/HomePage/HomePage";

const routes = [
    {
      path:'/',
      component:Login,
    },
    {
        path:'/login',
        component:Login

    },
    {
        path:'/homepage',
        component: HomePage
    }

]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
