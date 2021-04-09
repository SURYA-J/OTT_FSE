const express=require('express');
const app=express();
const mysql=require('mysql');
const cors=require('cors');

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password:'password',
    database:'ott'
});

app.post('/create',(req,res) =>{
    const movieName=req.body.movieName
    const dateAdded=req.body.dateAdded
    const rating=req.body.rating
    const synopsis=req.body.synopsis
    const language=req.body.language
    const availablePlatform=req.body.availablePlatform
    const actor=req.body.actor
    const director=req.body.director
    const genres=req.body.genres
    const runtime=req.body.runtime
    const movieStill=req.body.movieStill
    const trailerLink=req.body.trailerLink
    const award=req.body.award
    db.query('INSERT INTO movies(movieName, rating, dateAdded, synopsis,language,availablePlatform,actor,director,genres,runtime,movieStill,trailerLink,award) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [movieName, rating, dateAdded, synopsis,language,availablePlatform,actor,director,genres,runtime,movieStill,trailerLink,award],(err,results)=>{
        if(err){
            console.log(err)
        }else{
            console.log(results)
            res.send('values inserted')
        }
    } )
})

app.get('/show',(req,res) =>{
    const sql='SELECT * FROM movies'
    db.query(sql,(err,result)=>{
        if(err){
            res.status(200).send(err);
            return;
        }
        if(result.length) res.json(result);
        else res.json({})
    })
})

app.put('/update',(req,res) =>{
    const movieName=req.body.updates.movieName
    const dateAdded=req.body.updates.dateAdded
    const rating=req.body.updates.rating
    const synopsis=req.body.updates.synopsis
    const id=req.body.id
    const language=req.body.updates.language
    const availablePlatform=req.body.updates.availablePlatform
    const actor=req.body.updates.actor
    const director=req.body.updates.director
    const genres=req.body.updates.genres
    const runtime=req.body.updates.runtime
    const movieStill=req.body.updates.movieStill
    const trailerLink=req.body.updates.trailerLink
    const award=req.body.updates.award
    db.query('UPDATE movies SET movieName=?,dateAdded=?,rating=?,synopsis=?,language=?,availablePlatform=?,actor=?,director=?,genres=?,runtime=?,movieStill=?,trailerLink=?,award=? WHERE id=?',
    [movieName,dateAdded,rating,synopsis,language,availablePlatform,actor,director,genres,runtime,movieStill,trailerLink,award,id],(err,results)=>{
        if(err){
            console.log(err)
        }else{
            res.send('values inserted')
        }
    } )
})

app.delete('/delete/:id',(req,res) =>{
    const id = req.params.id;
  db.query("DELETE FROM movies WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.listen(3002,()=>{
    console.log('hey your port is running on 3002')
})