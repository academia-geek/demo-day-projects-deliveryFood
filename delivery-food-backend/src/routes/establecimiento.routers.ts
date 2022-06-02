import {Router} from 'express';
const router = Router();

import {getEstablecimiento,createEstablecimiento} from '../controllers/establecimiento.controller'

router.get('/establecimiento',getEstablecimiento);
router.post('/establecimiento',createEstablecimiento)
export default router;