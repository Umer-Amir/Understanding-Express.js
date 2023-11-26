const express = require('express'); 
const router = express.Router();

const fs = require('fs');


router.get('/', (req, res) => { 
	res.send("Welcome to users URL of Server");
});

router.get('/new', (req,res) => {
	res.render("users/newuser", { firstName: "Test" });
	// res.render("Welcome to new user URL of Server", { firstName: "Test" });
});

router.post('/', (req,res) => {
	console.log(req.body.firstName);
	res.send("Hi");
});

// router.get("/:id", (req,res) => {
// 	res.send(`Welcome to user with id: ${req.params.id} URL of Server`);
// });

// router.put("/:id", (req,res) => {
// 	res.send(`Welcome to user with id: ${req.params.id} URL of Server`);
// });

// router.delete("/:id", (req,res) => {
// 	res.send(`Welcome to user with id: ${req.params.id} URL of Server`);
// });

router.route("/:id")
	.get((req,res) => {
		console.log(req.user)
        res.json(req.user);
		// res.send(`Welcome to user with id: ${req.params.id}`);
	})
	.put((req,res) => {
		res.send(`Welcome to user with id: ${req.params.id}`);
	})
	.delete((req,res) => {
		res.send(`Welcome to user with id: ${req.params.id}`);
	});

let rawdata = fs.readFileSync('MOCK_DATA.json');
let users = JSON.parse(rawdata);

// console.log(users);

router.param("id", (req,res,next,id) => {
	console.log(id)
	req.user = users[id];
	next();
});

module.exports = router;
