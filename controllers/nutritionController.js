const {Nutrition} = require('../models');

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

//create
const createNutrition = async (req, res) => {
    try {
        const newNutrition = new Nutrition({
          ...req.body,
          user_id: req.user._id
        });
        await newNutrition.save();
        res.status(201).json(newNutrition);
      } catch (error) {
        res.status(500).json({ error: error.message });
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
        throw new Error("Nutrition not found and can't be deleted");
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Nutrition doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllNutrition, 
    getNutritionById, 
    createNutrition, 
    updateNutrition, 
    deleteNutrition
}