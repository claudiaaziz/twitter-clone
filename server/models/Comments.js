module.exports = (sequelize, dataTypes) => {
    const Comments = sequelize.define('Comments', {
        body: {
            type: dataTypes.STRING,
            allowNull: false,
        },
    });

    return Comments;
};
