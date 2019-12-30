const appointmentController = require('../controllers/appointmentController');
const physicianController = require('../controllers/physicianController');

module.exports = (app) => {
    app.get('/api', (request, response) => {
        response.status(200)
            .send({
                data: 'Hello world'
            })
    }),

    // Appointments.
    app.get('/api/appointments', appointmentController.all),

    // Physicians.
    app.get('/api/physicians', physicianController.all),
    app.post('/api/physicians', physicianController.store),
    app.get('/api/physicians/:id', physicianController.find),
    app.patch('/api/physicians/:id', physicianController.update),
    app.delete('/api/physicians/:id', physicianController.destroy)
}
