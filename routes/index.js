var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var panels = [
					{
					 'type': 'Olympic Weightlifting',
					 'class': 'oly',
					 'img': '/snatch.jpg'
					},
					{
					 'type': 'Powerlifting',
					 'class': 'powerlifting',
					 'img': '/tom.jpg'
					},
					{
					 'type': 'Bodybuilding',
					 'class': 'bodybuilding',
					 'img': '/bicep.jpg'
					},
					{
					 'type': 'Strength & Conditioning',
					 'class': 'strenth_conditioning',
					 'img': '/strength.png'
					}
				];

	res.render('index', { title: 'Marble Weightlifting', panels: panels });
});

router.get('/club', function(req, res) {
	res.render('club', { title: 'Marble Weightlifting'});
});

module.exports = router;
