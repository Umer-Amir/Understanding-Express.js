const express = require('express'); 
const app = express(); 
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
const PORT = 5000;

fs = require('fs');

function logger(req, res, next) {
	console.log(req.originalUrl);
	next();
}
app.use(logger);



// app.get('/', logger, (req, res) => { 
// 	res.status(200);

//     // res.send("Welcome to root URL of Server");

// 	res.render("index", { text123123: "World!" });

// 	// res.download('app.js');
// 	// res.json({ message: "Welcome to root URL of Server" });
// 	// res.send("Welcome to root URL of Server");
// });

const userRouter = require('./routes/users.js');
app.use('/users', userRouter);




app.listen(PORT, (error) => { 
	if(!error) 
		console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 