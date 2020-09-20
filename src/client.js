import * as sapper from '@sapper/app';
import Api from '@beyonk/sapper-httpclient'

Api.configure({ baseUrl: 'https://swgoh.gg/api/' });

sapper.start({
	target: document.querySelector('#sapper')
});