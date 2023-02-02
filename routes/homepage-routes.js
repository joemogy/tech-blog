const router = require('express').Router();
const {Blog,User,Comment}= require('../Models');
const sequelize = require('../config/connection');
const withAuth=  require('../utils/auth')


router.get('/', withAuth, async (req,res)=>{
    try{
        const getBlog= await Blog.findAll({include:[{model:Comment},{model:User,attributes:['user_name']}]});

        const posts = getBlog.map((post) => post.get({ plain: true }));

        res.render('homepage',{posts, logged_in:true});
    }catch(err){
        res.status(500).json(err);
    }
});

router.get('/login', (req,res)=>{
    if(req.session.logged_in){
        res.redirect('/');
    }res.render('login');
})

router.get('/signup', (req, res) => {
   if(req.session.logged_in){
    res.redirect('/')
    return
   } res.render('signup')
});

router.get('/Blog/:id', async (req,res)=>{ try{
    const findBlog= await Blog.findByPk(req.params.id
    ,{include:[{model:Comment},{model:User,attributes:["user_name"]}]})

    if(!findBlog){
        res.status(404).json({message:'Please enter a valid Id'})
    } const post = findBlog.get({ plain: true }); 
    res.render('single-post',{post, logged_in:true})
} catch(err){
    res.status(500).json(err)
}

});

module.exports=router;