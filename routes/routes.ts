import { Router } from "express";
import clientsController from "../controllers/clientController";

const router = Router();

router.get('/', clientsController.home);
router.get('/clients', clientsController.index);
router.get('/clients/create', clientsController.create);
router.post('/clients', clientsController.store);
router.get('/clients/:id',clientsController.show);
router.get('/clients/:id/edit',clientsController.edit);
router.put('/clients/:id', clientsController.update);
router.delete('/clients/:id', clientsController.destroy);




router.get('/produto/:id', clientsController.produto);


export default router;