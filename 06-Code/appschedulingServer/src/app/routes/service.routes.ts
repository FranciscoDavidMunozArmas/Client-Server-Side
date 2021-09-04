import {Router} from 'express';
import * as serviceController from '../controllers/service.controller'

const router = Router();

router.route("/service")
.get(serviceController.getServices)
.post(serviceController.postService)
.delete(serviceController.deleteServices);

router.route("/service/:idService")
.get(serviceController.getService)
.put(serviceController.putService)
.delete(serviceController.deleteService);



export default router;