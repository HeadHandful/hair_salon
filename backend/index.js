import Express from "express";

const app = Express()
const port = 3000

app.get('/', (request, response)=>{
    response.json({info:'my server working'})
})

app.listen(port,()=>{console.log("starting server!")})