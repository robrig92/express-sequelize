'use strict';
module.exports = (sequelize, DataTypes) => {
  const Physician = sequelize.define('Physician', {
    name: DataTypes.STRING
  }, {});
  Physician.associate = function(models) {
    Physician.belongsToMany(models.Patient, {
      through: 'Appointment', foreignKey: 'physicianId'
    })
  };
  return Physician;
};