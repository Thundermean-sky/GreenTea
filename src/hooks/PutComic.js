import axios from "axios";

export default function PutComic(comic)
{
    return new Promise((resolve, reject)=>{
        axios.put("http://localhost/comics", JSON.stringify(comic)).then(
            function (response)
            {
                console.log(response)

                if(response)
                {
                    resolve(response)
                }
                else
                {
                    reject(response)
                }

            }
        )
    })
}
