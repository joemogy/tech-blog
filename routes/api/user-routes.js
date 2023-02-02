const router = require('express').Router();
const { User} = require('../../Models');

router.post('/',async(req,res)=>{
    try{
        const postUser= await User.create({
            user_name: req.body.user_name,
            password: req.body.password
        });

        req.session.save(()=>{
            req.session.userName_id= postUser.id;
            req.session.user_name= postUser.user_name;
            req.session.logged_in= true;

            res.status(200).json(postUser);
        });
    }catch(err){
        res.status(500).json(err)
    }
})

router.get('/', async(req,res)=>{
    try{
        const getUser= await User.findAll();

        res.status(200).json(getUser);
    }catch(err){
        res.status(500).json(err)
    }
})

router.post('/login', async(req,res)=>{
    try{
        const loginUser= await User.findOne({
            where:{
                user_name: req.body.user_name
            }
        });
        if(!loginUser){
            res.status(404).json({message:'Invalid Username'})
            return;
        }

        const validPassword= await loginUser.checkPassword(req.body.password);

        if(!validPassword){
            res.status(404).json({message:'Invalid Password'})
            return;
        }

        req.session.save(()=>{
            req.session.userName_id=loginUser.id;
            req.session.user_name= loginUser.user_name;
            req.session.logged_in= true;

            res.json({ user: loginUser, message: 'You are now logged in!' });
        })
    }catch(err){
        res.status(500).json(err)
    }
})

// router.post('/logout', async(req,res)=>{
//     if(req.session.logged_in){
//         req.session.destroy(()=>{
//             res.status(204).end
//         })
//     }
// })

router.post('/logout', (req, res) => {

    req.session.destroy(() => {
        res.status(204).end();
    });
});

router.delete('/delete/:id', async(req,res)=>{ try{
    const delUser= await User.destroy({where:{
        id: req.params.id
    }})

    if(!delUser){
        res.status(404).json({message:'Enter valid Id'})
    } res.status(200).json(delUser)
}catch(err){
    res.status(500).json(err)
}
})


module.exports= router;
