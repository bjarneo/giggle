import routes from './routes';

export default function middlewares() {
    return [
        function *cache(next) {
            yield next;

            this.set('Cache-Control', 'max-age=300');
        },

        // here we define our custom routes
        routes.routes(),
    ];
}
