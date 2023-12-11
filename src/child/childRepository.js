const prisma = require('../db/index');

const findChild = async () => {
    const child = await prisma.child.findMany();

    return child;
};

const findChildById = async (id) => {
    const child = await prisma.child.findUnique({
        where: {
            id,
        },
    });

    return child;
};

const postChild = async (childData) => {
    childData.date_of_birth = new Date(childData.date_of_birth).toISOString();

    const child = await prisma.child.create({
        data: {
            child_name: childData.child_name,
            date_of_birth: childData.date_of_birth,
            height: childData.height,
            weight: childData.weight,
            gender: childData.gender,
            head_circumference: childData.head_circumference, 
        },
    });

    return child;
};

const deleteChild = async (id) => {
    await prisma.child.delete({
        where: {
            id,
        },
    });
};



module.exports = {
    findChild,
    findChildById,
    postChild,
    deleteChild,
};