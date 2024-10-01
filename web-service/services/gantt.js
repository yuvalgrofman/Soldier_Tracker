const Gantt = require('../models/gantt');

const createGantt = async (link, subject, company, week) => {
    await Gantt.create({
        link,
        subject,
        company,
        week,
    });
}

const updateGantt = async (link, company, week, newData) => {

    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    const gantt = await getGantt(link, company, week)

    days.forEach(day => {
        if (newData[day] !== undefined) {
            gantt[day] = newData[day];
        }
    });

    await gantt.save();
}

const getGantt = async (link, company, week) => {
    const gantt = await Gantt.findOne({link, company, week});

    if (gantt.length === 0) {
        throw new Error('Section not found');
    }

    return gantt;
}


module.exports = { createGantt, updateGantt, getGantt };