import {createStore} from 'vuex'
import user from "@/store/modules/user";
import comic from "@/store/modules/comic";

export default createStore({
    modules:{
        user:user,
        comic:comic
    }
})
