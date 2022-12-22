const express= require("express");
const bodyParser= require("body-parser");
const date= require(__dirname+"/dates.js");

// console.log(date());

const app=express();
let workItems=[];
var items=["coding", "web Dev"];
// This assumes a views directory containing an index.ejs page.
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
// to access the body of html
app.use(express.static("public"));
app.get("/", function(req, res){
  let day = date.get_Day();
  res.render("list", {ListTitle: day, NewListItems: items});

});

app.post("/", function(req, res){
   var item=req.body.NewItem;
   if(req.body.list==="work"){
    workItems.push(item);
    res.redirect("/work");
   }
   // console.log(item);
   else{
    items.push(item);
   res.redirect("/");// triggers the home route...
   }
});

app.get("/work", function(req, res){
  res.render("list", {ListTitle: "work List", NewListItems: workItems});
});
app.post("/work", function(req, res){
  let item = req.body.NewItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
