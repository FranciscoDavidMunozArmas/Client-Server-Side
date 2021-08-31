import {Router} from 'express';
import * as serviceCotroller from '../controllers/service.controller'

const router = Router();

router.route("/service/:idService")
    .post(serviceCotroller.postService)
    .put(serviceCotroller.putService);



export default router;
//get
//post
//delete