var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var fs = require('fs');

var toMarkdown = require('to-markdown').toMarkdown;


var app = express();

var Poet = require('poet');

var poet = Poet(app);



// blog initialization
poet.init();

app.post('/doPost', bodyParser.json(), function(req, res) {

    var html = req.body.content.toString();
    var title = req.body.title.toString();

    //var text = toMarkDown.toMarkdown(html);

    var dateformat =  function (date, fstr, utc) {
      utc = utc ? 'getUTC' : 'get';
      return fstr.replace (/%[YmdHMS]/g, function (m) {
        switch (m) {
        case '%Y': return date[utc + 'FullYear'] (); // no leading zeros required
        case '%m': m = 1 + date[utc + 'Month'] (); break;
        case '%d': m = date[utc + 'Date'] (); break;
        case '%H': m = date[utc + 'Hours'] (); break;
        case '%M': m = date[utc + 'Minutes'] (); break;
        case '%S': m = date[utc + 'Seconds'] (); break;
        default: return m.slice (1); // unknown code, remove %
        }
        // add leading zero if required
        return ('0' + m).slice (-2);
      });
    }

    var head = {
                'title'    :  title,
                'date'     : dateformat( new Date(), '%m-%d-%Y')
            };

    html = '{{' + JSON.stringify( head ) + '}}' + html;


    fs.writeFile("./_posts/" + title + '.md', html, function(err) {
    if(err) {
        console.log(err);

        res.send(400);

    } else {
        console.log("The file was saved!");

        res.send(200);
    }
}); 


});

app.get("/post/:post", function(req, res) {

    var post_title = req.params.post.toLowerCase().replace(/ /g, '-');

    // console.log( post_title );

    var post = poet.helpers.getPost( post_title );

    if (post) {
        return res.render("post", {
          post: post
        });
    } else {
        return res.send(404);
    }
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var port = 8080;

var server = app.listen(port, function () {

    var host = server.address().address
    var port = server.address().port

	console.log("Listening to port: " + port);

});

module.exports = app;
