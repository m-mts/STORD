jest.mock( '../models/index' );
jest.mock( '../check-url' );

const postUrl = require( "./post-url" );

describe( "slug router actions ", () => {
    test( "It POST URL should respond with slag", async () => {
        let data = '';
        let req = { body: { url: 'https:\\sample.addr' } };
        let res = { json: ( u ) => data = u };
        await postUrl( req, res )
        expect( data.data.slug ).toBe( 'bbb' );
    } );
} );