var express = require('express');
var router = express.Router();
var request = require('request');

var api_key = 'AIzaSyCmLhj2EuteEJFa3hOCKGJVWFda6aSI65M';
var google_api = 'https://www.googleapis.com/blogger/v3/blogs/';
var blog_id = '8735350545115790025';


/* GET home page. */
router.get('/', function(req, res) {
	
	var url = google_api + blog_id + '/posts' + '?key=' + api_key; 

	request( url , function (error, response, body) {

		var blog = false;

		if (!error && response.statusCode == 200) {

			var blogs = JSON.parse( body );
			blog = blogs.items[0];

		} else {

			console.log( error );

		}

		res.render('landing', { title: 'Marble Weightlifting', blog: blog });
	});

	
});

router.get('/club', function(req, res) {
	res.render('club', { title: 'Marble Weightlifting'});
});

router.get('/coach', function(req, res) {
	res.render('coach', { title: 'Marble Weightlifting'});
});

router.get('/schedule', function(req, res) {
	res.render('schedule', { title: 'Marble Weightlifting'});
});

router.get('/blog', function(req, res) {
	
	// var url = google_api + blog_id + '/posts?maxResults=999999999' + '&key=' + api_key;

	// request( url , function (error, response, body) {
		
	// 	var blogs = false;

	// 	if (!error && response.statusCode == 200) {

	// 		var blogs = JSON.parse( body );
	// 		blogs = blogs.items;

	// 	} else {

	// 		console.log( error );

	// 	}

	// 	res.render('blog', { title: 'Marble Weightlifting', blogs: blogs});
	// });
	
	res.render('blog', { title: 'Marble Weightlifting'});
});

router.get('/join', function(req, res) {
	res.render('join', { title: 'Marble Weightlifting'});
});

router.get('/about', function(req, res) {
	res.render('about', { title: 'Marble Weightlifting'});
});

router.get('/services', function(req, res) {
	res.render('services', { title: 'Marble Weightlifting'});
});

router.get('/contact', function(req, res) {
	res.render('contact', { title: 'Marble Weightlifting'});
});

// router.get('/admin', function(req, res) {
// 	res.render('add_post', { title: 'Marble Weightlifting'});
// });

// router.get('/landing1', function(req, res) {

// 	var panels = [
// 					{
// 					 'type': 'Olympic Weightlifting',
// 					 'text': 'Olympic weightlifting, also called Olympic-style weightlifting, or weightlifting, is an athletic discipline in the modern Olympic programme in which the athlete attempts a maximum-weight single lift of a barbell loaded with weight plates.',
// 					 'class': 'oly',
// 					 'img': '/snatch.jpg'
// 					},
// 					{
// 					 'type': 'Powerlifting',
// 					 'text': 'Powerlifting is a strength sport that consists of three attempts at maximal weight on three lifts: squat, bench press, and deadlift.',
// 					 'class': 'powerlifting',
// 					 'img': '/tom.jpg'
// 					},
// 					{
// 					 'type': 'Bodybuilding',
// 					 'text': 'Become Ahh-nold',
// 					 'class': 'bodybuilding',
// 					 'img': '/bicep.jpg'
// 					},
// 					{
// 					 'type': 'Strength & Conditioning',
// 					 'text': 'CROSSFIT CROSSFIT CROSSFIT CROSSFIT CROSSFIT CROSSFIT CROSSFIT CROSSFIT CROSSFIT CROSSFIT CROSSFIT CROSSFIT',
// 					 'class': 'strenth_conditioning',
// 					 'img': '/strength.png'
// 					}
// 				];

// 	res.render('index', { title: 'Marble Weightlifting' , panels: panels });
// });

module.exports = router;
