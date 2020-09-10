const express = require('express');
const app = express();

app.listen(8000,function(){
console.log("server is running")
})

const mockUserData=[
{name:'Mounir'},
{name:'Jojo'},
]
app.get('/user', function(req,res){
	res.json({
		  success: true,
	          message: 'successfully got users. Nice!',
		  users: mockUserData
		})
})

apt.get ('/user/:id',function(req,res){
		console .log(req.paprams.id)
		res.json({
		          success: true,
			  message: 'got one user',
			  user : req.params.id
			})
})
