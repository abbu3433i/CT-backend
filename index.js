//=====================================Day-1=========================================
// let a="hello" 
// console.log(a); 
// let joke=require('give-me-a-joke') 
// console.log(joke); 
// joke.getRandomDadJoke((ab)=>{ 
//    console.log(ab); 
// }) 
 
 
//========================================CRUD=================================================== 

// crud operation in node js  
// let fs=require('fs') 
 
 
// // file create 
// fs.writeFileSync('fsd7.js',"fsd batch is not complete") 
 
// // rename 
// fs.renameSync("fsd7.js","fsd8.js") 
 
// // read  
// let data=fs.readFileSync("fsd8.js") 
// console.log(data.toString()); 
 
// // file delete 
// fs.unlinkSync("hye.js") 
 
// asy crud operation  
 
// fs.writeFile("last.html","<h1>hello</h1>",(error)=>{ 
 
//    if (error)  
//       throw error 
//    console.log("done"); 
// }) 
 
// read operation 
// fs.readFile("fsd8.js",(err,data)=>{ 
//    if (err) throw err 
//    console.log(data.toString()); 
// }) 
 
 
// copy data 
// fs.copyFile("firstcopy.js","secondcopy.js",(error)=>{ 
//    if (error) throw error 
//    console.log("copy operation"); 
// }) 
 
 
 
// ============================server create in nodejs local host ================================

// let http=require('http') 
// let server = http.createServer((req,res)=>{ 
//    res.end("i  am create first server with localhost:5000") 
// }) 
// server.listen(5000,()=>{ 
//    console.log("hyekgfklbcfnkldfndnkldgklngkldn"); 
// })


//================================pathparameter vs queryparameter===================================================

// const { log } = require('console');
// let express = require('express');
// let app = express();

// app.listen(3000,()=>{      //---------server create in express js
//    console.log("server st");
// })

// app.get('/',(req,res)=>{  //-----------------------path parameter
//    res.send("hello bhaiyon")
// })

// app.get('/search',(req,res)=>{   //------------------------query parameter like[/search?firstName=Abhishek&lastName=Gour]
//    // res.send("baccha")
//    let {firstName,lastName} = req.query;
//    res.send(`${firstName} ${lastName}`)
//    console.log(req.query);
// })

// // app.get('/:a',(req,res)=>{            //----------Dynamic routing------------------
// //    // console.log(req.params,"sdgdahgjh");
// //    let {a} = req.params  //----browser se req aa rhi he 
// //    res.send(a)
// // })

// // app.get('/:r/:a',(req,res)=>{  //---":r" agar kisi ke bhi aage colon laga ho to bo variable he usme kuch data aa rha he params ki form me  
// //    let {r,a} = req.params  
// //    res.send(`${r} ${a}`);
// // })



//=================================[Data sharing and shown on frontend{1}]=============================================

// let express = require('express');
// let app = express();

// app.set('view engine','ejs')  //---------predefine to use ejs first do setup require ejs


// app.listen(3000,()=>{      
//    console.log("server st");
// })

// app.get('/',(req,res)=>{
//    res.render('index')     //---------normal----
// })

// app.get('/',(req,res)=>{
//    let a = Math.floor(Math.random()*100);    
//    res.render('index',{a})    //--------data sharing---
// })


// app.get('/random',(req,res)=>{
//    let arr = ['A','B','C'];    
//    res.render('random',{arr})    //-------arr sharing---
// })


//-----------------------------------{2}---filter value from arr[how many time A came in arr]
// app.get('/',(req,res)=>{
//    res.send("lolololopo")     //------normal----
// })

// app.get('/random/:dta',(req,res)=>{
//    let {dta} = req.params
//    let arr = ['A','B','C','A','A']; 

//    let ac = arr.filter((value,index)=>{

//           return value === dta
          
//        })
//        console.log(ac);

//        let va = ac.length
//           console.log(ac);

//    res.render('index',{arr,ac,va})    //------------arr sharing---
// })





//=======================================Nitesh unreachable code==================================================== 

// let express=require('express')
// let app=express()
// // const { get } = require('http')
// app.use(express.urlencoded({extended:true}))
// app.set('view engine',"ejs")       //---------isha ke help se templete use karte hai
// // templete use karte hai ushi liye

// app.get('/',(req,res)=>{
//    res.render('index')
// })

// app.get('/user',(req,res)=>{
//    let{name,email,pass}=req.query
//     res.send(${name} ${email} ${pass})
// })

// // post 
// app.post('/user',(req,res)=>{
//   console.log(req.body,"this");
//   let{name,email,pass}=req.body
//   res.send($ name: {name} ${email} ${pass})
// })


// app.listen(4000,()=>{
//    console.log("new server create");
//  })




// ======================================CRUD using Restful API{3}======================================================
let express = require('express')
let app = express()


var methodOverride = require('method-override')    //
app.use(methodOverride('_method'))                 //-----both are use for "put" and "patch" method


app.set('view engine','ejs')

// app.use(express.static('public'))

app.listen(3000,()=>{
   console.log("chalu......");
})

let comments = [                 //---------Api ka data he arr ki form me
   {
       id:0,
       username:"Sam",
       comment:"chitkara is a nice university 0"
   },
   {
       id:1,
       username:"g2",
       comment:"chitkara is a nice university 1"
   },
   {
       id:2,
       username:"vohra",
       comment:"chitkara is a nice university 2"
   }
 ]


 app.use(express.urlencoded({extended:true}))  //-------jo bhi data hum form me bhejenge bo exact receive ho jayega server pe


 app.get('/',(req,res)=>{
 res.send('start')
 })
 
 app.get('/show',(req,res)=>{
 res.render('index',{comments})    //-----arr ka data frontend pe show ho rha he
 })

 app.get('/form',(req,res)=>{
 res.render('form')
 })

 //------------------------------form ka data purane arr me add kar do
 app.post('/show',(req,res)=>{
  console.log(req.body,"hehehe");
  let{username,comment} = req.body      
  comments.push({username,comment})
 
  res.redirect('show')
 //  res.send('sendddd')
 })


//---------------------------------Target element pe click karne pe ek unique id aa rhi he jo ki params me receive ho rhi he.... us id ki madad se datafind kar rhe hen 

 app.get('/edit/:id',(req,res)=>{
  let {id} = req.params
//   console.log(id,'helleleoe');

  let data1 = comments.find((data)=>{return data.id==id})  //data ki id agar destructure bali id se match hui mtlb target element select ho gya he  

  res.render('edit',{data1})

 })


 //---------------------------------old Data replace in this section 

 app.patch('/show/:id',(req,res)=>{
  let {id} = req.params         //---:id naam ke variable me receive data req.params se access hoga
  console.log(id,'eje');
  let{username,comment} = req.body   //--form ka data req.body se access hoga 

  let data2 = comments.find((data)=>{return data.id==id})  //---id se data find karke uska username or comment replace kar diya 
  console.log(data2,'helele');

  data2.username = username
  data2.comment = comment
  res.redirect('/show')
 })


