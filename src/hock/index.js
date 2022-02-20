const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    const username = req.body.userData.username;
    const password = req.body.userData.password;
    if( username === 'Mean' && password === '123456')
    {
        res.status(200).json({
            status:200,
            message:'success'
        })
    }
    else
    {
        res.status(404).json({
            status:404,
            message:'fail'
        })
    }

})

app.listen(4396, function(){
    console.log('监听端口4396')
})

