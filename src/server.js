import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import Api from '@beyonk/sapper-httpclient'

Api.configure({ baseUrl: 'https://swgoh.gg/api/' });

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const url = dev ? '/' : '/gear';

polka() // You can also use Express
	.use(
		url,
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
