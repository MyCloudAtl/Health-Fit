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

module.exports = {
    getGyms,
    getGym,
}