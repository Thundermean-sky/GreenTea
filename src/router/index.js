import {createRouter, createWebHashHistory} from "vue-router";
import Login from "@/pages/User/Login";
import HomePage from "@/pages/HomePage/HomePage";
import Comic from "@/pages/Comic/Comic";
import Novel from "@/pages/Novel/Novel";
import Game from "@/pages/Game/Game";
import AboutUs from "@/pages/AboutUs/AboutUs";
import SingleComic from "@/components/SingleComic";

const routes = [
    {
      path:'/',
      component:HomePage,
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
        children:[          //子路由跳转暂未实现
            {
                name:'singleComic',
                path:'/singleComic',
                component:SingleComic
            }
        ]
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
