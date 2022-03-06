import {createRouter, createWebHashHistory} from "vue-router";
import Login from "@/pages/User/Login";
import HomePage from "@/pages/HomePage/HomePage";
import Comic from "@/pages/Comic/Comic";
import Novel from "@/pages/Novel/Novel";
import Game from "@/pages/Game/Game";
import AboutUs from "@/pages/AboutUs/AboutUs";

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
        component:Comic,
        children:{

        }
    },
    {
        path:'/novel',
        component:Novel
    },
    {
        path:'/game',
        component:Game
    },
    {
        path:'/aboutUs',
        component:AboutUs
    }


]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
