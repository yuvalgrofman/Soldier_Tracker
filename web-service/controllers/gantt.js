const ganttService = require('../services/gantt');

const getGantt = async (req, res) => {
    const { company, week, link } = req.params;

    try {
        const gantt = await ganttService.getGantt(link, company, week);
        return res.send(gantt);
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

const updateGantt = async (req, res) => {
    const { link, company, week, newData } = req.body;

    try {
        await ganttService.updateGantt(link, company, week, newData);
        return res.send('Gantt updated');
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

const createGantt = async (req, res) => {
    const { link, subject, company, week } = req.body;

    try {
        await ganttService.createGantt(link, subject, company, week);
        return res.send('Gantt created');
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}


module.exports = { createGantt, updateGantt, getGantt };