import {Router} from 'express';
import * as serviceController from '../controllers/service.controller'

const router = Router();

router.route("/service/:idService")
    .get(serviceController.getService)
    .post(serviceController.postService)
    .put(serviceController.putService);



export default router;
//get
//post
//delete