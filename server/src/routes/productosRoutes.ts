import {Router} from 'express';
import productosController from '../controllers/productosControllers';

class Indexproductos{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', productosController.list);
        this.router.post('/',productosController.create);
        this.router.put('/:id',productosController.update)
        this.router.delete('/:id',productosController.delete);
    }
}

const productosRoutes = new Indexproductos();
export default productosRoutes.router;