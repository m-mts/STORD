const express = require( 'express' );
const { slugSize, slugAlphabet } = require( './config' );
const { sequelize } = require( './lib/models/index' );

const App = express();

App.use( express.json() )
App.use( express.static( 'static' ) );
App.get( '/', ( _, res ) => {
    res.redirect( '/index.html' )
} );

App.get( `/[${slugAlphabet}]{${slugSize}}`, require( './api/slugs.controller' ) );
App.use( '/slugs', require( './api/slugs.controller' ) );

App.use( ( req, res, next ) => {
    res.redirect( '/error404.html' );
} );

sequelize.sync().then( () => {
    App.listen( process.env.APP_PORT, () => {
        console.log( `App listening on port ${process.env.APP_PORT}!` );
    } );
} );