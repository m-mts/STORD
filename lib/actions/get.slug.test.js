jest.mock( '../models/index' );

const getSlug = require( "./get.slug" );

describe( "slug router actions ", () => {
    test( "It GET /aaa (slug) should respond with redirect", async () => {
        let url = '';
        let req = { path: '/aaa' };
        let res = { redirect: ( u ) => url = u };
        await getSlug( req, res )
        expect( url ).toBe( 'https:\\sample.addr' );
    } );
} );