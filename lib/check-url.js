const fetch = require( "node-fetch" );

const checkUrl = async ( url ) => {
    const responce = await fetch( url );
    return responce.ok;
};
module.exports = {
    checkUrl
};
