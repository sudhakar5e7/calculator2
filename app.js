const express = require('express')
const app = express()
app.use(express.static("frontend"))
app.use("/add",function(req,res){
    var first=req.query.firstNumber
    var second=req.query.secondNumber
    var ans=parseInt(first)+parseInt(second)
    return res.send({
        "key":ans
    })
})
app.use("/sub",function(req,res){
    var first=req.query.firstNumber
    var second=req.query.secondNumber
    var ans=parseInt(first)-parseInt(second)
    return res.send({
        "key":ans
    })
})
app.use("/mul",function(req,res){
    var first=req.query.firstNumber
    var second=req.query.secondNumber
    var ans=parseInt(first)*parseInt(second)
    return res.send({
        "key":ans
    })
})
app.use("/div",function(req,res){
    var first=req.query.firstNumber
    var second=req.query.secondNumber
    var ans=parseInt(first)/parseInt(second)
    return res.send({
        "key":ans
    })
})
app.listen(3000)