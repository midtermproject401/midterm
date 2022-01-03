"use strict";

const hotel = (sequelize, DataTypes) =>
  sequelize.define("hotels", {
    hotelName: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
    facilities: { type: DataTypes.STRING, allowNull: false },
    activitiesAndEntertainments: { type: DataTypes.STRING, allowNull: false },
    Discription: { type: DataTypes.STRING, allowNull: false },
    Location: { type: DataTypes.STRING, allowNull: false },
    Rating:{type: DataTypes.STRING, allowNull: false},
    map:{type: DataTypes.STRING, allowNull: false}
  });

module.exports = hotel;
