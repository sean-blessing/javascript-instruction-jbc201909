let http = require('http');
//let url = requre('url');

let server = http.createServer(function(request, response){
    console.log('got a request!!');
    console.log(request.url);
    //let params = getParams(request);
    //console.log("params = "+params);
    // for (let p of params) {
    //     console.log(p);
    // }
    response.write('hello from your web server!');
    response.end();
});

server.listen(3000);
function getParams(req){
    let q=req.url.split('?'),result={};
    if(q.length>=2){
        q[1].split('&').forEach((item)=>{
             try {
               result[item.split('=')[0]]=item.split('=')[1];
             } catch (e) {
               result[item.split('=')[0]]='';
             }
        })
    }
    return result;
  }
