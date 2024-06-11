let express=require('express')
let mongodb=require('mongodb')
let router=express.Router()
let url=require("../url")

let mcl=mongodb.MongoClient
router.delete("/",(req,res)=>{
    let obj={
        "p_id":req.body.p_id
    }
    mcl.connect(url,(err,conn)=>{
        if(err){
            console.log('Error in connection:-',err)

        }else{
            let db=conn.db("nodedb")
            db.collection("products").deleteOne(obj,(err,result)=>{
            if(err){
                console.log("error")
                res.json({'delete':'Error'+err})

            }
            else{
                if(result.matchedCount!=0){
                    console.log("data deleted")
                    res.json({"delete":"success"})
                }else{
                console.log("Data not deleted")
                res.json({"delete":"Record Not"})

            }
            conn.close
            }
            }
        )
        }
    })

})
module.exports=router