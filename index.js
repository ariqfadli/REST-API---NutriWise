const express = require(`express`);

const app = express ();
app.use(express.json());

// app.use("/", (req, res, next) =>{
//     res.send('Hello World!');
// });

app.get("/", (req, res)=>{
    res.send('Get Method Hello World!');
});

app.post("/", (req, res)=>{
    res.send('Post Method Hello World!');
});

app.listen(4000, ()=> {
    console.log('listening on port 4000')
})