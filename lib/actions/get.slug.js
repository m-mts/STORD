const { models } = require( '../models/index' );

module.exports = async ( req, res ) => {
    try {
        const slug = req.path?.slice( 1 );
        const data = await models.URL.findBySlug( slug );
        if ( data?.url ) {
            return res.redirect( data.url );
        }
        else {
            res.redirect( `/error404.html` );
        }
    }
    catch {
        res.redirect( `/error404.html` );
    }
};