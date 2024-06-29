module.exports = (sequelize, dataTypes) => {
    const Posts = sequelize.define('Posts', {
        title: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: dataTypes.STRING,
            allowNull: false,
        },
    });

    return Posts;
};
