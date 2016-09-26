import router from 'koa-router';
import fetch from 'isomorphic-fetch';
import config from 'config';
import auth from '../auth';

const routes = router();

routes.get('/hot/viral/:page', function *viral() {
    const page = parseInt(this.params.page, 10);

    // should move the endpoint to the config
    yield fetch(`${config.get('imgur.api')}/gallery/hot/viral/${page}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...auth(),
        },
    })
    .then(response => response.json())
    .then(json => {
        const data = json.data.filter(item => !item.nsfw);

        this.body = {
            data,
        }
    })
    .catch(error => {
        this.body = {
            error,
        };
    });
});

export default routes;
