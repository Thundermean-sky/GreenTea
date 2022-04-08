import axios from 'axios'

export default async function useComic(comicId){
    return new Promise((resolve, reject)=>{
        axios.get(`http://localhost/comics/${comicId}`).then(
            function(response){
                const {data:{data, msg}} = response
                if((response.status >= 200 && response.status < 300) && msg === 'success')
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
