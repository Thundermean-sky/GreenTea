import axios from 'axios'

export default async function(comicId){
    return new Promise((resolve, reject)=>{
        axios.get('https://yapi.lingyun-sky.top/mock/34/green-tea/list',{
            comicId:comicId
        }).then(
            function(response){
                const {data:{code, data, msg}} = response
                if(code === 0 && msg === 'success')
                {
                    resolve(data)
                }
                else
                {
                    reject("Error")
                }
            }
        )
    })
}
