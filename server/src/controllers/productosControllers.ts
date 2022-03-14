import {Request, Response} from 'express';
import pool from '../database'

class ProductosController{

    async list(req: Request, res: Response){
        const producto = await pool.query('SELECT * FROM producto');
        res.json(producto)
    } 

    async getCliente(req: Request, res: Response):Promise<any>{
        const {id} = req.params;
        const producto = await pool.query('SELECT * FROM producto WHERE id = ?',[id]);
        if(producto.length > 0){
            return res.json(producto[0]);
        }
        res.status(404).json({
            text: 'El producto no existe'
        })
    }

    async create(req: Request, res: Response):Promise<void>{
        await pool.query('INSERT INTO producto set ?',[req.body]);
        res.json({
            message: 'producto guardado'
        })
    }

    async delete(req: Request, res: Response){
        const {id} = req.params;
        await pool.query('DELETE FROM producto WHERE id = ?', [id]);
        res.json({message:'producto eliminado'});
    }

    async update(req: Request, res: Response){
        const {id} = req.params;
        await pool.query('UPDATE producto set ? WHERE id = ?', [req.body,id]);
        res.json({message:'Producto actualizado'});
    }
}

const productosController = new ProductosController();
export default productosController;
