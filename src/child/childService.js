const prisma = require('../db/index');

const {
    findChild,
    findChildById,
    postChild,
    deleteChild,
} = require('./childRepository');

const getAllChild = async () => {
    const child = await findChild();

    return child;
};

const getChildById = async () => {
    const child = await findChildById(id);

    if (!child) {
        throw Error ("Child not found!");
    }

    return child;
};

const createChild = async (newChildData) => {
    const child = await postChild(newChildData);

    return child;
};

const deleteChildById = async (id) => {
    await getChildById(id);
    
    await deleteChild(id);
};

module.exports = {
    getAllChild,
    getChildById,
    createChild,
    deleteChildById,
};



