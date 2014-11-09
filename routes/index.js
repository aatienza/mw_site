var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var panels = [
					{
					 'type': 'Olympic Weightlifting',
					 'text': 'Olympic weightlifting, also called Olympic-style weightlifting, or weightlifting, is an athletic discipline in the modern Olympic programme in which the athlete attempts a maximum-weight single lift of a barbell loaded with weight plates.',
					 'class': 'oly',
					 'img': '/snatch.jpg'
					},
					{
					 'type': 'Powerlifting',
					 'text': 'Powerlifting is a strength sport that consists of three attempts at maximal weight on three lifts: squat, bench press, and deadlift.',
					 'class': 'powerlifting',
					 'img': '/tom.jpg'
					},
					{
					 'type': 'Bodybuilding',
					 'text': 'Become Ahh-nold',
					 'class': 'bodybuilding',
					 'img': '/bicep.jpg'
					},
					{
					 'type': 'Strength & Conditioning',
					 'text': 'CROSSFIT CROSSFIT CROSSFIT CROSSFIT CROSSFIT CROSSFIT CROSSFIT CROSSFIT CROSSFIT CROSSFIT CROSSFIT CROSSFIT',
					 'class': 'strenth_conditioning',
					 'img': '/strength.png'
					}
				];

	res.render('index', { title: 'Marble Weightlifting', panels: panels });
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
	res.render('blog', { title: 'Marble Weightlifting'});
});

router.get('/join', function(req, res) {
	res.render('join', { title: 'Marble Weightlifting'});
});

router.get('/landing1', function(req, res) {
	res.render('landing1', { title: 'Marble Weightlifting'});
});

module.exports = router;
