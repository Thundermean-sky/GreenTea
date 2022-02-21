import {createRouter, createWebHashHistory} from "vue-router";
import Login from "@/pages/User/Login";
import HomePage from "@/pages/HomePage/HomePage";
import Comic from "@/pages/Comic/Comic";

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
    },
    {
        path:'/comic',
        component:Comic
    }

]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
