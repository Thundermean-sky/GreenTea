import axios from "axios";

export default function testApi()
{
    return new Promise((resolve, reject)=>{
        axios.get("http://localhost/comics/A/连载中").then(
            function(response)
            {
                const {data} = response;
                console.log(data)
                if(data != null)
                {
                    resolve(data)
                }
                else
                {
                    reject("failed")
                }
            }
        )
    })
}
