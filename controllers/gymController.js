const {Gym} = require('../models')

const getGyms = async (req, res) => {
    try {
        const gyms = await Gym.find()
        res.json(gyms)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getGym = async(req, res) => {
    try {
        const {id} = req.params
        const gym = await Gym.findById(id)
        res.json(gym)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createGym = async (req, res) => {
    try {
        const newObject = await new Gym(req.body)
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

  const updateGym = async (req, res) => {
    try {
        let { id } = req.params;
        let changedObject = await Gym.findByIdAndUpdate(id, req.body, { new: true })
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

  const getGymByUserId = async (req, res) => {
    try {
        const { user_id } = req.params;
        const nutritionRecords = await Gym.find({ user_id });
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

const deleteGym = async (req, res) => {
    const { id } = req.params;
    try {
        // Logic to delete user by ID from MongoDB
        await Gym.findByIdAndDelete(id);
        res.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting user', error });
    }
};

module.exports = {
    getGyms,
    getGym,
    createGym,
    getGymByUserId,
    updateGym,
    deleteGym
}