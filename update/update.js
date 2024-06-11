let express=require('express')
let mongodb=require('mongodb')
const url=require('../url')

let router=express.Router()
let mcl=mongodb.MongoClient
router.put("/",(req,res)=>{
   let p_id=req.body.p_id
   let obj={
   "p_name":req.body.p_name,
   "p_cost":req.body.p_cost
   }

   let db=db.conn('nodedb')
   db.collection('products').updateOne({p_id},{$set:obj},(err,result)=>{
    if(err){
        res.json({"update":"error"+err})
    }
    else{
        if(result.matchedCount!=0){
            res.json({"update":"success"})
            console.log("data updated")

        }else{
            console.log("Data not updated")
            res.json({"update":"Record ot found"})
        }
    }
    conn.close()
   })
})
module.exports=router