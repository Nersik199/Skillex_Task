import { Router } from 'express';

//controllers
import controllers from '../controllers/generate.js';

const router = Router();

router.post('/generate', controllers.generate);

export default router;
