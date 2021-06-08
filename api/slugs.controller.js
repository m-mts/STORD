const express = require( 'express' );
const router = express.Router();
const { slugSize, slugAlphabet } = require( '../config' );
const { models } = require( '../lib/models/index' );
const { checkUrl } = require( '../lib/check-url' );

router.get( `/[${slugAlphabet}]{${slugSize}}`, async ( req, res ) => {
    const slug = req.path.slice( 1 );
    const data = await models.URL.findBySlug( slug );
    if ( data.url ) return res.redirect( data.url );
    res.redirect( `/error404.html?s=${slug}` );
} );

router.post( '/', async ( req, res ) => {
    if ( req.body.url ) {
        try {
            let isGoodUrl = await checkUrl( req.body.url );
            if ( isGoodUrl ) {
                let dbRes = await models.URL.add( req.body.url );
                return res.json( { data: dbRes?.[0]?.[0] } );
            }
        }
        catch ( e ) {
            return res.json( { data: { message: e.message } } );
        }
    }
    return res.json( { data: { message: 'Invalid URL' } } );
} );

module.exports = router;