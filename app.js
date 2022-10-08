const express=require('express');
const body=require('body-parser');
const ejs=require('ejs');
const date =require(__dirname+"/date.js")

console.log(date());

const app=express();


app.set('view engine','ejs');

app.use(body.urlencoded({extended:true}));

app.use(express.static("Public"));

var items=["Buy Food","Cook Food","Order"];
app.get("/",(req,res)=>{
    var day=date();
    res.render("index",{day:day,newItemList: items});
    
    app.post("/",(req,res)=>{
        var item =req.body.newItem;
        items.push(item);
        
        for(var i=0;i<items.length;i++){
            console.log(items[i]);
           }

        res.redirect("/");
    })

});




app.listen(8000,()=>{
    console.log("Server is Created....");
});
