var fn_index = async (ctx, next) => {
	console.log(`process ${ctx.request.method} ${ctx.request.url}`)
	ctx.response.body = `<h1>Index</h1>
	<form action="/signin" method="post">
		<p>Nmae:<input type="" name="name" value="koa123"></p>
		<p>Password: <input type="password" name="password"></p>
		<p><input type="submit" value="Submit"></p>
	</form>`
}

var fn_signin  = async(ctx, next) => {
	console.log(`process ${ctx.request.method} ${ctx.request.url}`)
	var name = ctx.request.body.name || ''
	var password = ctx.request.body.password || ''

	console.log(`signin with name:${name}, password:${password}`)
	if (name === 'koa' && password === '12345') {
		ctx.response.body = `<h1>Welcome, ${name}!</h1>`
	}else {
		ctx.response.body = `<h1>Login failed!</h1>
		<p><a href='/' style = 'text-decoratio:none'>Try ewqagain</a></p>`
	}
}	

module.exports = {
	'GET /':fn_index,
	'POST /signin':fn_signin
}