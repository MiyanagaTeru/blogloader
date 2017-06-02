var express = require('express')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var fs = require('fs')
var bodyParser = require('body-parser')

const app = new express()
const port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use(bodyParser.text({limit: '20mb'}))
app.use(express.static('dist'))

app.get("/", function(req, res) {
	res.sendFile(__dirname + '/index.html')
})

app.post('/initArticles', function(req, res) {

	var filePath = __dirname + '/data/articles.json';
	fs.readFile(filePath, function (err, data) {
		if (err) throw err;
		res.type('json');
		res.end(data);
	});
});

app.post('/saveArticles', function(req, res) {

	var fullContentFilePath = __dirname + '/data/articles.json'

	fs.writeFile(fullContentFilePath, JSON.stringify(JSON.parse(req.body), null, 4), function(err, data) {
		if (err) throw err;
		res.type('json');
		res.end( req.body);
	});

})

app.listen(port, function(error) {
	if (error) {
		console.error(error)
	} else {
		console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
	}
})
