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
      const newGym = new Gym({
        ...req.body,
        user_id: req.user._id
      });
      await newGym.save();
      res.status(201).json(newGym);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {
    getGyms,
    getGym,
    createGym
}