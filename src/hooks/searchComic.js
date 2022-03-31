import axios from "axios";

export default function searchComic(comicName)
{
    return new Promise((resolve, reject)=>{
        axios.get('https://yapi.lingyun-sky.top/mock/19/greentea/singleComic',{
            'comicName':comicName
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
