import {Request, Response} from 'express';

class IndexController{

    index(req: Request, res: Response){
        res.send({text: 'Api is /api/producto'});
    } 
}

const indexController = new IndexController();
export default indexController;