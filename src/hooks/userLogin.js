import axios from "axios";

export default async function(username, password){
    return new Promise((resolve,reject)=>{
        axios.post('https://yapi.lingyun-sky.top/mock/34/green-tea/login', {
            uid:username,
            pwd:password
        }).then(function (res) {
            const {data:{code,data,msg}} = res;
            if(code === 1 && msg === 'success')
            {
                resolve(data)
            }
            reject(msg)
        })
    })
}
