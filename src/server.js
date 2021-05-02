import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { json } from 'body-parser';
import session from 'express-session';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const { createServer } = require('http');
const ssl_port = 3000;


const { handler } = polka()
	.use(
		json(),
		session({
			secret: 'SomeSecretStringThatIsNotInGithub',
			resave: true,
			saveUninitialized: true,
			cookie: {
				maxAge: 31536000
			}
		}),
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: (req, res) => {
				return ({
					token: req.session.token,
					userInfo: {
						userId: req.session.userId,
						username: req.session.username,
						useremail: req.session.useremail,
						status: req.session.status,
						loggedin: req.session.loggedin
					},
				})
			}
		})
	)
	.get('*', (req, res) => {
		res.end(`POLKA: Hello from ${req.pathname}`);
	});

// Mount Polka to HTTPS server
createServer({}, handler).listen(ssl_port, _ => {
	console.log(`> Running on http://localhost:${ssl_port}`);
});

// polka() // You can also use Express
// 	.use(
// 		json(),
// 		session({
// 			secret: 'SomeSecretStringThatIsNotInGithub',
// 			resave: true,
// 			saveUninitialized: true,
// 			cookie: {
// 				maxAge: 31536000
// 			}
// 		}),
// 		compression({ threshold: 0 }),
// 		sirv('static', { dev }),
// 		sapper.middleware({
// 			session: (req, res) => {
// 				return ({
// 					token: req.session.token,
// 					userInfo: {
// 						userId: req.session.userId,
// 						username: req.session.username,
// 						useremail: req.session.useremail,
// 						status: req.session.status,
// 						loggedin: req.session.loggedin
// 					},
// 				})
// 			}
// 		})
// 	)
// 	.listen(PORT, err => {
// 		if (err) console.log('error', err);
// 	});

