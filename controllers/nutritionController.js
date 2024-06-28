const { Nutrition } = require('../models');
const { User } = require('../models')

//Read
const getAllNutrition = async (req, res) => {
    try {
        const objectArray = await Nutrition.find()
        res.json(objectArray)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//Read
const getNutritionById = async (req, res) => {
    try {
        const { id } = req.params
        const singleObject = await Nutrition.findById(id)
        if (singleObject) {
            return res.json(singleObject)
        }
        return res.status(404).send(`that Nutrition doesn't exist`)
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Nutrition doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

const createNutrition = async (req, res) => {
    try {
        const newObject = await new Nutrition(req.body)
        await newObject.save()
        return res.status(201).json({
            newObject,
        });
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That User doesn't exist`)
        }
        return res.status(500).json({ error: error.message })
    }
}

//update
const updateNutrition = async (req, res) => {
    try {
        let { id } = req.params;
        let changedObject = await Nutrition.findByIdAndUpdate(id, req.body, { new: true })
        if (changedObject) {
            return res.status(200).json(changedObject)
        }
        throw new Error("Nutrition not found and can't be updated")
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Nutrition doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

//delete
const deleteNutrition = async (req, res) => {
    try {
        const { id } = req.params;
        const erasedObject = await Nutrition.findByIdAndDelete(id)
        if (erasedObject) {
            return res.status(200).send("Nutrition deleted");
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getNutritionByUserId = async (req, res) => {
    try {
        const { user_id } = req.params;
        const nutritionRecords = await Nutrition.find({ user_id });
        if (nutritionRecords.length > 0) {
            return res.json(nutritionRecords);
        }
        return res.status(404).send(`No nutrition records found for user_id ${user_id}`);
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`No nutrition records found for user_id ${user_id}`);
        }
        return res.status(500).send(error.message);
    }
};

module.exports = {
    getAllNutrition, 
    getNutritionById, 
    createNutrition, 
    updateNutrition, 
    deleteNutrition,
    getNutritionByUserId
}