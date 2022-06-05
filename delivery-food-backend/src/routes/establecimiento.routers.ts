import {Router} from 'express';
const router = Router();

import {getEstablecimiento,createEstablecimiento} from '../controllers/establecimiento.controller';



router.get('/',getEstablecimiento);
router.post('/',createEstablecimiento)
export default router;