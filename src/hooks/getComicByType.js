import axios from "axios";

export default function getComicByType(comicType){
    return new Promise((resolve,reject)=>{
        axios.get('https://yapi.lingyun-sky.top/mock/19/greentea/typeRecommend',{
            'comicType':comicType
        }).then(
            function(response){
                const {data:{data, code, msg}} = response

                if(code === 1 && msg === 'success')
                {
                    resolve(data)
                }
                else
                {
                    reject('failed')
                }
            }
        )
    })
}
