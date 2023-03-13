const key = require('../apiKey');
const api = require('../axios');
const fs = require('fs/promises');

const pesquisarEmpresa = async (req, res) => {
    const { dominioEmpresa } = req.params;

    const query = `/?api_key=${key}&domain=${dominioEmpresa}`;

    try {
        const { data } = await api.get(query);

        if (data.name) {
            const empresas = JSON.parse(await fs.readFile('./empresas.json'));
            let empresa = empresas.find(empresa => empresa.name === data.name);

            if (!empresa) {
                empresas.push(data);
                await fs.writeFile('./empresas.json', JSON.stringify(empresas));
            }
        }

        return res.json(data);
    } catch (error) {
        console.log(error.message);
    }


};

module.exports = pesquisarEmpresa;