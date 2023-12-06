const getAllUsers = (req, res) => {
    res.send({
        message: 'GET all users success',
        data: {users},

    })
};

const createNewUser = (req, res)=>{
    console.log(req.body);
    res.send({
        message: 'POST new user success',
        data: req.body,
    })
};

module.exports = {
    getAllUsers,
    createNewUser,
}