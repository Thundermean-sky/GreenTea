import axios from "axios";

export default function getTypeList(comicType,comicProcess)
{
    return new Promise((resolve, reject)=>{
        axios.get("https://yapi.lingyun-sky.top/mock/19/greentea/typeList",{
            'type':comicType,
            'process':comicProcess
            }
        ).then(
            function(response){
                const {data:{data, code, msg}} = response;
                if(code === 1 && msg === 'success')
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
