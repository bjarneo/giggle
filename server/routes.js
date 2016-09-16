import router from 'koa-router';
import viral from './routes/viral';

const routes = router();

routes.use('/api', viral.routes());

export default routes;
