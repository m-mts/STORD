const { slugSize, maxUrlLength } = require( '../../config' );
const { QueryTypes } = require( 'sequelize' );

const url = ( sequelize, DataTypes ) => {
    const URL = sequelize.define( 'url', {
        slug: {
            type: DataTypes.STRING( slugSize ),
            allowNull: false,
            primaryKey: true,
        },
        url: {
            type: DataTypes.STRING( maxUrlLength ),
            allowNull: true
        }
    }, {
        timestamps: false
    } );

    URL.findBySlug = async slug => {
        return await URL.findOne( {
            where: { slug: slug },
        } );
    };

    URL.add = async url => {
        return await sequelize.query( 'UPDATE "urls" SET "url" = :url WHERE "slug" = \
        (SELECT "slug" FROM "urls" WHERE "url" IS NULL LIMIT 1) RETURNING "slug"',
            {
                replacements: { url },
                type: QueryTypes.UPDATE
            } );
    }

    return URL;
};

module.exports = url;