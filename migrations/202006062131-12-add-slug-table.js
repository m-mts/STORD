const { slugSize, slugAlphabet, maxUrlLength } = require( '../config' );
const { generate } = require( '../lib/slug.generator' );
const slugs = generate( slugAlphabet.split( '' ), slugSize );

module.exports = {
  up: async ( queryInterface, Sequelize ) => {
    try {
      await queryInterface.dropTable( 'urls' );
    }
    catch ( e ) {
      console.log( e );
    }
    await queryInterface.createTable( 'urls', {
      slug: {
        type: Sequelize.STRING( slugSize ),
        allowNull: false,
        primaryKey: true,
      },
      url: {
        type: Sequelize.STRING( maxUrlLength ),
        allowNull: true
      }
    } );
    await queryInterface.bulkInsert( 'urls', slugs.map( s => ( { slug: s } ) ) );
  }
}
