const Appointment = require('../models/appointment').Appointment;

module.exports = {
    async all(request, response) {
        response.status(200)
            .send({message: 'Testing'});
    }
}