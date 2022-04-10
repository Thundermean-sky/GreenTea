import axios from "axios";

export default function()
{
    return new Promise((resolve, reject)=>{
        axios.get("http://localhost/comics").then(
            function(response){
                const {data:{data,msg}} = response;
                if(response.status >= 200 && response.status < 300 && msg === "success")
                {
                    resolve(data);
                }
                else
                {
                    reject("failed")
                }
            }
        )
    })
}
