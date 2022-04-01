import axios from 'axios'

export default async function useComic(comicId){
    return new Promise((resolve, reject)=>{
        axios.get('https://yapi.lingyun-sky.top/mock/19/greentea/simpleComic',{
            comicId:comicId
        }).then(
            function(response){
                const {data:{code, data, msg}} = response
                if(code === 1 && msg === 'success')
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
