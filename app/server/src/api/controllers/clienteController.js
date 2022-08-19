const clienteService = require ('../services/clienteService');

const create = async (req, res) => { 
    const{ nome } = req.body;
    const cliente = await clienteService.create(nome);

    return res.status(201).json(cliente);
};

const findAll = async (_req, res) => { 
    const clientes =  await clienteService.getAll();

    res.status(200).json(clientes);
}

const getById =  async (req, res) => { 
    const{ id } = req.params;
    const cliente = await  clienteService.getById(id);

    return res.status(200).json(cliente);
}

const update = async  (req, res) => { 
    const{ id } = req.params;
    const{ name } = req.body;

    const cliente =  await clienteService.update(id, name);

    return res.status(200).json(cliente);
}

const deletebyId = async (req, res) => { 
    const{ id } = req.params;
    const cliente = await clienteService.deletebyId(id);

    return res.status(200).json(
        { message : 'Cliente deletado com sucesso'}
    );
}

module.exports = { 
    create,
    findAll,
    getById,
    update,
    deletebyId
}