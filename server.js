
const express = require('express');
const app = express();

app.listen(8000,function(){
console.log("server is running")
})

const mockUserData=[
{name:'Mounir'},
{name:'Jojo'},
]


apt.get ('/user/:id',function(req,res){
		console .log(req.paprams.id)
		res.json({
		          success: true,
			  message: 'got one user',
			  user : req.params.id
			})
})
