const express =require('express')
const app = express()
const path = require('path');

const mongoose = require('mongoose')
const UserModel = require('./model/users')
const Doctermodel = require('./model/docter')
const BothModel = require('./model/doctorandpatient')
const DailyModel = require('./model/daily')
const cors = require('cors')
require('dotenv').config();
const PORT =process.env.PORT || 3001
app.use(express.json())

// const corsCofig = {
//     origin:process.env.APPLICATION_URL,
//     credentials:true,
//     methods: ["GET","POST","PUT","DELETE"],
// }
//  const allowedOrigins = ['https://doc-frontend-gamma.vercel.app'];


// Serve frontend build
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const allowedOrigins = ['http://localhost:5173'];



app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
const { data } = require('react-router-dom')

// app.use(cors(corsCofig))
mongoose.connect(process.env.MONGO_URI)




const newDocter = new Doctermodel({
    name: 'Dr. Gerty Cori',
    email: 'gerty@gmail.com',
    profession: 'Cardiologist',
    age: 24,
    docid: 'doc4',
    docpassword: 'doc4',
    isActive: false,
    profile:'https://i.imgur.com/RMZ1SZi.jpeg',
    about:'some',
    review:[{
      userprofile:'a',
      content:'a',
      like:false,
      dislike:false,
      likecount:0,
    }],
    c1:'a',
    c2:'a',
    c3:'a',
    c4:'a',
    c5:'a',
    patientAt1: {
      time:600,
      available: false,
      timeout:false,
    //   name: String,
    //   age:Number,
    //   gender:String,
    },
    patientAt2: {
        time:780,
        available: false,
        timeout:false,
    //   name: String,
    //   age:Number,
    //   gender:String,
    },
    patientAt3: {
        time:960,
        available: false,
        timeout:false,
    //   name: String,
    //   age:Number,
    //   gender:String,
    },
  })

//    newDocter.save().then(doc => console.log("Doc saved:", doc))
//    .catch(err => console.error("Error saving user:", err));

app.post('/login',(req,res)=>{
    const {name,email,password,profileurl}=req.body
    UserModel.findOne({name:name})
    .then(result =>{
        if(result){
            res.json('Username already exist')
        }
        else{
            UserModel.create(req.body)
            .then(result => res.json(result))
            .catch(err =>res.json(err))
        }
    })



   
})
app.post('/signup',(req,res)=>{
    const {sname, spassword}=req.body
    UserModel.findOne({name:sname})
    .then(user=>{
        if(user){
            if(user.password === spassword){
                res.json(user)
              }
              else{
                  res.json("The password is incorrect")
              }
        }
        else{
            res.json("No record existed")
        }
 
    })
})

app.post('/appointment', (req,res)=>{
    Doctermodel.find()
    .then( data => res.json(data))
    .catch(ree => res.json(ree))
})
app.put('/appointmentwithdoc/:id',(req,res)=>{
    const id = req.params.id
    Doctermodel.findByIdAndUpdate({_id:id},{
        'patientAt1.name':req.body.patientname,
        'patientAt1.age':req.body.patientage,
        'patientAt1.gender':req.body.patientgender,
        'patientAt1.mobileno':req.body.patientnumber,
        'patientAt1.available':true,
        'patientAt1.usid':req.body.patientid,

    }).then( source => {res.json(source)})
})
app.put('/appointmentwithdoc2/:id',(req,res)=>{
    const id = req.params.id
    Doctermodel.findByIdAndUpdate({_id:id},{
        'patientAt2.name':req.body.patientname,
        'patientAt2.age':req.body.patientage,
        'patientAt2.gender':req.body.patientgender,
        'patientAt2.mobileno':req.body.patientnumber,
        'patientAt2.available':true,
        'patientAt2.usid':req.body.patientid,

    }).then( source => {res.json(source)})
})
app.put('/appointmentwithdoc3/:id',(req,res)=>{
    const id = req.params.id
    Doctermodel.findByIdAndUpdate({_id:id},{
        'patientAt3.name':req.body.patientname,
        'patientAt3.age':req.body.patientage,
        'patientAt3.gender':req.body.patientgender,
        'patientAt3.mobileno':req.body.patientnumber,
        'patientAt3.available':true,
        'patientAt3.usid':req.body.patientid,

    }).then( source => {res.json(source)})
})
app.put('/profileinitial/:id',(req,res)=>{
    const id = req.params.id
    UserModel.findByIdAndUpdate({_id:id},{
        profileurl:req.body.profileurlx
    }).then( sources => {res.json(sources)})
     .catch(err => {res.json(err)})
})
app.put('/changeproflie/:id',(req,res)=>{
    const id = req.params.id
    UserModel.findByIdAndUpdate({_id:id},{
        profileurl:req.body.needprofile
    }).then( sourcess => {res.json(sourcess)})
    .catch(err => {res.json(err)})
})
app.post('/getnewproflie/:id',(req,res) => {
    const id = req.params.id
    UserModel.findOne({_id:id})
    .then( xzx => res.json(xzx))
    .catch( err => res.json(err))
})
app.post('/docandpatient',(req,res)=>{
  BothModel.create(req.body)
  .then(result => res.json(result))
  .catch(err =>res.json(err))
})
app.post('/getallpatient',(req,res)=>{
    BothModel.find()
    .then(result => res.json(result))
    .catch(err =>res.json(err))
})
app.post('/doclogin',(req,res)=>{
    const {docid,docpassword} = req.body
    Doctermodel.findOne({docid:docid})
    .then(user=>{
        if(user){
            if(user.docpassword === docpassword){
                res.json(user)
              }
              else{
                  res.json("The password is incorrect")
              }
        }
        else{
            res.json("No record existed")
        }
 
    })
})
app.put('/addreview/:id',(req,res) =>{
    const id = req.params.id
    Doctermodel.findByIdAndUpdate(id,
        { $push: { review:req.body.review1  } }, 
        { new: true }
    ).then(result => res.json(result) )
    .catch (error => res.json(error))

})
runIfNewDay()
async function runIfNewDay() {
const today = new Date().toISOString().slice(0, 10); 
const lastRun =  await DailyModel.findById({ _id:'6808fef7a456779f5dc05e65'});
//---------------------------------------------------
// const newday = new DailyModel({
//     dayname: "dailytask",
//     date: today
//   });

// newday.save();
const newone1 = {
time:600,        
available: false,
timeout: false,
age:'',
gender:'',
mobileno:'',
name:'',
usid:'',
}
const newone2 = {
time:780,        
available: false,
timeout: false,
age:'',
gender:'',
mobileno:'',
name:'',
usid:'',
}
const newone3 = {
time:960,        
available: false,
timeout: false,
age:'',
gender:'',
mobileno:'',
name:'',
usid:'',
}
// console.log('1',lastRun.date)
// console.log('2',today)
if (!lastRun || lastRun.date !== today) {
    console.log("✅ Running daily task for:", today);

    const restart=await Doctermodel.find()
    
    restart.map(async (item,index)=>{
        
            
        
           await Doctermodel.findByIdAndUpdate({_id:item._id},{
            patientAt1:newone1,
            patientAt2:newone2,
            patientAt3:newone3
            
        })
        

        
    })  
  
    // 🔧 Put your daily logic here (reset, cleanup, etc.)

    // Save today's date
    await BothModel.deleteMany({})
    await DailyModel.findOneAndUpdate(
        { _id:'6808fef7a456779f5dc05e65'},
        { date: today }
    
    );
  } else {
    console.log("⏳ Daily task already run today.");
   
}

  }


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)

})
