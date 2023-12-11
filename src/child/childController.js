const express = require('express');

const prisma = require('../db/index');

const {
    getAllChild,
    getChildById,
    createChild,
    deleteChildById,
} = require('./childService'); 

const router = express.Router();

router.get("/", async(req,res)=>{
    const child = await getAllChild();

    res.status(200).send(child);
});

router.get("/:id", async(req,res)=>{
    try {
        const childId = req.params.id;
        const child = await getChildById(childId);

        res.status(200).send(child);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

router.post("/", async(req,res)=>{
    try {
        const newChild = req.body;

        const child = await createChild(newChild);

        res.status(200).send({
            data: child,
            message: "Create child data success!",
        });
    } catch (err) {
        res.status(400).send(err.message);
    }
});

router.delete("/:id", async(req,res)=>{
    try {
        const childId = req.params.id;

        await deleteChildById(childId);

        res.status(200).send("Child data deleted successfully!");
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;