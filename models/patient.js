'use strict';
module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    name: DataTypes.STRING
  }, {});
  Patient.associate = function(models) {
    Patient.belongsToMany(models.Physician, {
      through: 'Appointment', foreignKey: 'patientId'
    })
  };
  return Patient;
};