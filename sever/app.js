//引入express模块
const express=require('express')

//引入cors模块
const cors=require('cors')

//引入MySQL模块
const mysql=require('mysql')

const bodyParser = require('body-parser');

//创建MySQL的连接池
const pool=mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  password:'',
  port:3306,
  database:'test'
});

//创建express实例
const server=express();

//将bodyParser作为Server中间件使用
server.use(bodyParser.urlencoded({
  extended:false
}));

//将cors作为中间件使用
server.use(cors({
origin:['http://127.0.0.1:8080','http://localhost:8080']
}));

//用户注册的接口
server.post('/register',(req,res)=>{
  //获取用户提交的用户名等信息
  let username = req.body.username;
  //以用户名为条件进行查找操作,如果用户存在,则产生合法的错误信息
  //如果用户不存在,则将用户的相关信息写入数据表 -- xzqa_author  
  let sql = 'SELECT COUNT(id) AS count FROM uname WHERE username=?';
  pool.query(sql,[username],(err,results)=>{
    if(err) throw err;       
    if(results[0].count){
        res.send({message:'注册失败',code:0});
    } else {
        //获取密码信息
        let password = req.body.password;            
        //完成数据写入操作
        //console.log(password)
        let sql = 'INSERT uname(username,password) VALUES(?,?)';
        pool.query(sql,[username,password],(err,results)=>{
          if(err) throw err;
          res.send({message:'注册成功',code:1});
      });
    }
})
});

//用户登录接口
server.post('/login',(req,res)=>{
  let username=req.body.username;
  let password=req.body.password;
  console.log(username)
  console.log(username)
  let sql='select id,username from uname where username=? and password=?';
  
  pool.query(sql,[username ,password],(err,results)=>{

    if(err) throw err;
   //console.log(results);
    if(results.length!=0){
      res.send({message:'登录成功',code:1});
    }else{
      res.send({message:'登录失败',code:0});
    }
  });
});


//指定服务器端的监听口号
server.listen(3000);