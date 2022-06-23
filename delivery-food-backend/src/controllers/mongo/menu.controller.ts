import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../../services/database.service.mongo";


// Listar Menú por ID
export const getmenuID = async (req: Request, res: Response) => {
    let id = new ObjectId(req.params.id);
    try {
<<<<<<< HEAD
        const menu = await collections.Menu.findOne({ _id: id },
            { projection: { _id: 0, tipo_menu: 1, items: 1 } });
        res.status(200).send(menu);
=======
        const menu = await collections.Menu.findOne({ _id: id }, 
                                                    { projection: { _id: 0, tipo_menu: 1, items: 1 } });
        return res.status(200).send(menu);
>>>>>>> dev-back-ingridargote
    } catch (error) {
        console.error(error.code);
        return res.status(500).send(error.message);
    }
};

// Eliminar Menú por ID
export const deletemenuID = async (req: Request, res: Response) => {
    let id = new ObjectId(req.params.id);
    try {
        const menu = await collections.Menu.deleteOne({ _id: id });
<<<<<<< HEAD
        res.status(200).send({ message: "Menu eliminado correctamente" });
=======
        return res.status(200).send({message: "Menu eliminado correctamente"});
>>>>>>> dev-back-ingridargote
    } catch (error) {
        console.error(error.code);
        return res.status(500).send(error.message);
    }
};

<<<<<<< HEAD
// Crear Menú
export const postMenu = async (req: Request, res: Response) => {
    try {
        let data = req.body;
        let { insertedId } = await collections.Menu.insertOne(data);
        res.status(200).json({ message: "Menu creado correctamente", id: insertedId });
    } catch (error) {
        res.status(500).send(error.message);
    }
};
=======
>>>>>>> dev-back-ingridargote

// Adicionar items de menu
export const postItems = async (req: Request, res: Response) => {
    try {
        let data = req.body;
        data.id_plato = new ObjectId(data.id_plato);
        let id = new ObjectId(req.params.id);
        await collections.Menu.updateOne({ _id: id }, { $push: { items: data } });
<<<<<<< HEAD
        res.status(200).json({ message: "Items agregados" });
=======
        return res.status(200).send({message: "Items agregados"});
>>>>>>> dev-back-ingridargote
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

// Editar Tipo Menú
export const patchmenuID = async (req: Request, res: Response) => {
    let id = new ObjectId(req.params.id);
    try {
        let data = req.body;
        const menu = await collections.Menu.updateOne({ _id: id }, { $set: { tipo_menu: data.tipo_menu } });
<<<<<<< HEAD
        res.status(200).send({ message: "Tipo de menú actualizado" });
=======
        return res.status(200).send({message: "Tipo de menú actualizado"});
>>>>>>> dev-back-ingridargote
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

// Editar Items de Menú
export const editItemsMenuId = async (req: Request, res: Response) => {
    try {
        let id = new ObjectId(req.params.id); // id del menú
        let data = req.body;     // id_plato y las otras propiedades de items
        const menu = await collections.Menu.findOne({ _id: id }, { projection: { _id: 0, items: 1 } });
        let items = menu.items;
        let objIndex = items.findIndex((obj => obj.id_plato == data.id_plato));
<<<<<<< HEAD
        data.id_plato = new ObjectId(data.id_plato);;
        items[objIndex] = data;
        console.log(items);
        await collections.Menu.updateMany({ _id: id }, { $set: { items: items } });
        res.status(200).send({ message: "Items editados" });
=======
        data.id_plato= new ObjectId(data.id_plato);;     
        items[objIndex] = data;        
        await collections.Menu.updateMany({ _id: id }, { $set: {items: items } });                                        
        return res.status(200).send({message: "Items editados"});
>>>>>>> dev-back-ingridargote
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

// Eliminar Items de Menú
export const deleteItemsMenuId = async (req: Request, res: Response) => {
    try {
        let id = new ObjectId(req.params.id); // id del menú
        let data = req.body;     // id_plato y las otras propiedades de items
        const menu = await collections.Menu.findOne({ _id: id }, { projection: { _id: 0, items: 1 } });
        let items = menu.items;
        let index = items.findIndex((obj => obj.id_plato == data.id_plato));
        if (index > -1) {
<<<<<<< HEAD
            items.splice(index, 1);
        }
        await collections.Menu.updateMany({ _id: id }, { $set: { items: items } });
        res.status(200).send({ message: "Item eliminado" });
=======
            items.splice(index, 1); 
          }
        await collections.Menu.updateMany({ _id: id }, { $set: {items: items } });                                        
        return res.status(200).send({message: "Item eliminado"});
>>>>>>> dev-back-ingridargote
    } catch (error) {
        return res.status(500).send(error.message);
    }
};