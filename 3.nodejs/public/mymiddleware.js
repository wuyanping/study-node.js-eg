module.exports = function(req, res) {
	res.send('视图的目录是  ' + req.app.get('views'))
}