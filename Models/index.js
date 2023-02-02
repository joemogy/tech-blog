const blog= require('./blog');
const comment= require('./Comments');
const user= require('./User')

user.hasMany(blog,{
    foreignKey:'userName_id',
    onDelete:'CASCADE'
})

blog.belongsTo(user,{
    foreignKey:'userName_id'
})

user.hasMany(comment,{
    foreignKey:'userName_id',
    onDelete:'CASCADE'
})

comment.belongsTo(user,{
    foreignKey:'userName_id'
})

blog.hasMany(comment,{
    foreignKey:'blog_id',
    onDelete:'CASCADE'
})

comment.belongsTo(blog,{
    foreignKey:'blog_id'
})

module.exports={
    comment,
    blog,
    user

};