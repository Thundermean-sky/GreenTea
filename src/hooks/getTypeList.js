import axios from "axios";

export default function getTypeList(comicType,comicProcess)
{
    return new Promise((resolve, reject)=>{
        axios.get(`http://localhost/comics/${comicType}/${comicProcess}`).then(
            function(response){
                const {data: {data, msg}} = response;
                if(response.status >= 200 && msg === 'success')
                {
                    resolve(data)
                }
                else{
                    reject('failed')
                }
            }
        )
    })
}
