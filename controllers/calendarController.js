const {Calendar} = require('../models')

const getCalendars = async (req, res) => {
    try {
        const calendar = await Calendar.find({});
        res.json(calendar);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCalendar = async (req, res) => {
    try {
        const { id } = req.params;
        const calendar = await Calendar.findById(id); 
        if (!calendar) {
            return res.status(404).send("Calendar not found");
        }
        res.json(calendar);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateCalendar = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCalendar = await Calendar.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedCalendar) {
            return res.status(404).send("Calendar not found");
        }
        res.json(updatedCalendar);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getCalendar,
    getCalendars,
    updateCalendar,
}
