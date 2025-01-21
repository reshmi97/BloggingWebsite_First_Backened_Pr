import express from "express"
import bodyParser from "body-parser";

const app=express();
const port=3000;
app.use(bodyParser.urlencoded({ extended: true }));
let blogHistory=[];
app.use(express.static("public"));

app.get("/",(req,res)=>{
        res.render("index.ejs");
});

app.get("/blog",(req,res)=>{
        res.render("blog.ejs",{blogHistory});
});

app.get("/about",(req,res)=>{
        res.render("about.ejs");
});
app.get("/writeBlog",(req,res)=>{
        res.render("writeBlog.ejs");
});
app.get("/seeBlog/:index",(req,res)=>{
        const index=parseInt(req.params.index);
        console.log(index+"index" );
        const blog=blogHistory[index];
        console.log(blog);
        res.render("seeBlog.ejs",{blog});
});


app.post("/submit", (req, res) => {
  const {title,description,text}=req.body;
  console.log(req.body.title);
  console.log(req.body.description);
  blogHistory.push({title,description,text});
  if(blogHistory.length>0){
        blogHistory.forEach((blog ,index)=> {
                
                          console.log(blog.title );
                          console.log(blog.description);
                          console.log(blog.text);
                });
        }
  
  res.redirect("/blog");
});

app.listen(port,()=>{
        console.log(`Server is running on ${port}.`);
});