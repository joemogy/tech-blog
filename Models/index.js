const Blog= require('./Blog');
const Comment= require('./Comment');
const User= require('./User');



User.hasMany(Blog,{
    foreignKey:'userName_id',
    onDelete:'CASCADE'
})

Blog.belongsTo(User,{
    foreignKey:'userName_id'
})

User.hasMany(Comment,{
    foreignKey:'userName_id',
    onDelete:'CASCADE'
})

Comment.belongsTo(User,{
    foreignKey:'userName_id'
})

Blog.hasMany(Comment,{
    foreignKey:'blog_id',
    onDelete:'CASCADE'
})

Comment.belongsTo(Blog,{
    foreignKey:'blog_id'
})

module.exports={
    Comment,
    Blog,
    User

};
