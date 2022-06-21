const router = require('express').Router();
const Todo = require('../connection/index');

router
.get('/',async(req,res)=>{
    let tasks = await Todo.orderBy('AT','asc').get();
        res.render('index',{tasks:tasks});
})
.post('/',async(req,res)=>{
    const{AT,DO}=req.body;
    await Todo.add({
        AT:AT,
        DO:DO
    });
    res.redirect('/');
})
.post('/update/:id',async(req,res)=>{
    const{AT,DO}=req.body;
    await Todo.doc(req.params.id).set({
        AT:AT,
        DO:DO
    });
    res.redirect('/');
})
.get('/delete/:id',async(req,res)=>{
    await Todo.doc(req.params.id).delete();
    res.redirect('/');
});

module.exports = router;