const employeService = require('../services/employeService');

const create = async (req, res) => { 
    const{ name, email, password } = req.body;
    const employe = await employeService.create(name, email, password);

    return res.status(201).json(employe);
}

const getAll =  async (_req, res) => { 
    const employes =  await employeService.getAll();

    res.status(200).json(employes);
}

const getById =  async (req, res) => {
    const{ id } = req.params;
    const employe = await  employeService.getById(id);
    if (!employe) { 
        return res.status(404).json(
            { message : 'Funcionário não encontrado'}
            );
    }
    return res.status(200).json(employe);
}

const update = async  (req, res) => { 
    try {
        const{ id } = req.params;
        const{ name } = req.body;
    
        const employe =  await employeService.update(id, name);
    
        return res.status(200).json(employe);
    } catch (error) { 
        return res.status(500).json(
            { message : 'Erro ao atualizar funcionário'}
            );
    }
}
module.exports = {  
    create,
    getAll,
    getById,
    update,
}