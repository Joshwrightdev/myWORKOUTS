const User = require('./User');
const Workout = require('./Workout');
const WorkoutHistory = require('./WorkoutHistory');

User.hasMany(Workout, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Workout.belongsTo(User, {
    foreignKey: 'owner_id'
});

User.hasMany(WorkoutHistory, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

WorkoutHistory.belongsToMany(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Workout, WorkoutHistory };
