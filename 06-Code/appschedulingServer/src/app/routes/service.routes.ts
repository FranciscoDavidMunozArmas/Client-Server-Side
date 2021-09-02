import {Router} from 'express';
import * as serviceCotroller from '../controllers/service.controller'

const router = Router();

router.route("/service/:idService")
    .get(serviceCotroller.getService)
    .post(serviceCotroller.postService)
    .put(serviceCotroller.putService);



export default router;
//get
//post
//delete