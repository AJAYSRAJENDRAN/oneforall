function demo(req,res){
    // const {name,place}=req.body
    // res.json({name,place})
    // res.send("welcome")
    const ab=([{name:"A",age:1},{name:"A",age:12},{name:"Ac",age:1},{name:"Ab",age:11}])
    const data1=parseInt(req.params.age)
    const details=(ab.find(val=>(val.age==data1)))
    res.json(details)
  
}

module.exports=demo