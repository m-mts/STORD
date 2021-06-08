const { models } = require( '../models/index' );
const { checkUrl } = require( '../check-url' );

module.exports = async ( req, res ) => {
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
};