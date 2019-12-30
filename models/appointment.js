'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    physicianId: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER
  }, {});
  Appointment.associate = function(models) {
    Appointment.belongsTo(models.Physician);
    Appointment.belongsTo(models.Patient);
  };
  return Appointment;
};