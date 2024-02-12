 // module js impport Ansych import
import express from "express";
const app = express();

app.get('/',(req,res)=>{
    res.send('server is ready')
})

app.get('/api/jokes', (req,res)=>{
    const jokes=[
        {
            id:1,
            title:"First Joke",
            content:"This is first joke"
        },
        {
            id:2,
            title:"Second Joke",
            content:"This is Second joke"
        },
        {
            id:3,
            title:"Third Joke",
            content:"This is third joke"
        },
        {
            id:4,
            title:"fourth Joke",
            content:"This is fourth joke"
        }
    ]
    res.send(jokes)
})

const port=process.env.PROT || 3300

app.listen(port,()=>{
    console.log(`server started at https//:localhost:${port} `);
})