const Sequelize = require( 'sequelize' );

const sequelize = new Sequelize(
    process.env.DATABASE_DATABASE,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT || 5432,
        dialect: 'postgres',
    },
);

const models = {
    URL: require( './url' )( sequelize, Sequelize )
};

module.exports = {
    sequelize: sequelize,
    models
};