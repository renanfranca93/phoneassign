import { Router } from 'express';

import UserController from './app/controllers/UserController';
import PublisherController from './app/controllers/PublisherController';
import RangeController from './app/controllers/RangeController';
import AssignmentController from './app/controllers/AssignmentController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.get('/users', UserController.index);

routes.get('/publishers', PublisherController.index);
routes.post('/publishers', PublisherController.store);
routes.put('/publishers/:publisherId', PublisherController.update);

routes.get('/ranges', RangeController.index);
routes.post('/ranges', RangeController.store);
routes.put('/ranges/:rangeId', RangeController.update);

routes.get('/assignments', AssignmentController.index);
routes.post('/assignments', AssignmentController.store);
routes.put('/assignments/:assignmentId', AssignmentController.update);

export default routes;
