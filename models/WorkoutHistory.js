const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class WorkoutHistory extends Model { }

WorkoutHistory.init(
    {
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        workout_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'workout',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'workout_history',
    }
);

module.exports = WorkoutHistory;
