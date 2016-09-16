import router from 'koa-router';
import fetch from 'isomorphic-fetch';
import auth from '../auth';

const routes = router();

routes.get('/hot/viral/:page', function *viral() {
    const page = parseInt(this.params.page, 10);

    // should move the endpoint to the config
    yield fetch(`https://api.imgur.com/3/gallery/hot/viral/${page}.json`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...auth(),
        },
    })
    .then(response => response.json())
    .then(json => {
        this.body = json;
    })
    .catch(error => {
        this.body = {
            error,
        };
    });
});

export default routes;