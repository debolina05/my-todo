const Sequelize = require('../models/todo');


exports.getData = async (req,res,next)=>{
    const data =  await Sequelize.findAll(); 
    res.render('main',{
        data : data,
        path: '/'
    });
}


exports.postData = async (req,res,next) => {
    const id = req.body.id;
    const todo = req.body.todo;
    const description = req.body.description;
    const object = {
        todo : todo,
        description: description,
    }

    try{
        const todoResult =  await Sequelize.create({
            todo,
            description,
        });
    
        res.redirect('/');
        
    }catch(err){
        console.log(err);
        res.status(500).send('Internal server error');
    }

};


exports.deletedata = async (req, res, next) => {
    const itemId = req.params.id;

    try {
        const item = await Sequelize.findByPk(itemId);
        if (item) {
            await item.destroy({where: {id:item.id}});
            res.redirect('/');
        } else {
            res.status(404).send('Item not found');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};


exports.right = async(req, res, next) => {
    const id = req.params.id;
    try {
        const item = await Sequelize.findByPk(id);
        if (item) {
            await item.update({ done: true }); 
            res.redirect('/');
        } else {
            res.status(404).send('Item not found');
        }
    }catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}



exports.errorPage = (req,res,next) =>{
    res.status(404).render('404');
}



