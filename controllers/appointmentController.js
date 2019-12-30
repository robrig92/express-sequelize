const Appointment = require('../models').Appointment;
const Physician = require('../models').Physician;
const Patient = require('../models').Patient;

module.exports = {
    async all(request, response) {
        const appointments = await Appointment.findAll({
            include: [Patient, Physician]
        });

        response.status(200)
            .send({
                appointments: appointments
            });
    }
}