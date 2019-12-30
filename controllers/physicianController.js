const Physician = require('../models').Physician;
const Patient = require('../models').Patient;

module.exports = {
    async all(request, response) {
        const physicians = await Physician.findAll({
            include: [Patient]
        });
        response.status(200)
            .send({
                physicians: physicians
            });
    },
    async find(request, response) {
        const physician = await Physician.findOne({
            where: {id: request.params.id},
            include: [Patient]
        });
        if (!physician) {
            response.status(404)
                .send({
                    message: 'Not found'
                });
        }
        response.status(200)
            .send({
                physician: physician
            });
    },
    async store(request, response) {
        try {
            const physician = await Physician.create({
                name: request.body.name
            });
            response.status(201)
                .send({
                    message: 'Created',
                    physician: physician
                });
        } catch (e) {
            console.log(e);
            response.status(500)
                .send({
                    message: 'Server error',
                    'exception': e
                });
        }
    },
    async update(request, response) {
        let physician = await Physician.findOne({
            where: {id: request.params.id},
            include: [Patient]
        });
        if (!physician) {
            response.status(404)
                .send({
                    message: 'Not found'
                });
        }
        try {
            await Physician.update({
                name: request.body.name
            }, {
                where: {
                    id: request.params.id
                }
            });
            physician = await Physician.findOne({
                where: {
                    id: request.params.id
                },
                include: [Patient]
            })
            response.status(200)
                .send({
                    message: 'Updated',
                    physician: physician
                });
            
        } catch (e) {
            console.log(e);
            response.status(500)
                .send({
                    message: 'Server error',
                    exception: e
                })
        }
    },
    async destroy(request, response) {
        const physician = await Physician.findOne({
            where: {
                id: request.params.id
            },
            include: [Patient]
        });
        if (!physician) {
            response.status(404)
                .send({
                    message: 'Not found'
                });
        }
        try {
            await Physician.destroy({
                where: {
                    id: request.params.id
                }
            });
            response.status(200)
                .send({
                    message: 'Deleted',
                    physician: physician
                });
        } catch (e) {
            console.log(e);
            response.status(500)
                .send({
                    message: 'Server error',
                    exception: e
                })
        }
    }
}