 const http=require('http')

  http.createServer((req,res)=>{
    if(req.url==='/chat'){
      res.end('Chat Page')
    }else{
        if(req.url==='/about'){
            res.end('About Page')
    }
}

    res.end('Hello World')
  }).listen(3000,()=>{
    console.log('Server is running on port 3000')
  })