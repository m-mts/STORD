const request = require( "supertest" );
const App = require( './index' );

describe( "App actions ", () => {
    test( "It GET / should respond with an static file", async () => {
        const response = await request( App ).get( "/" );
        expect( response.statusCode ).toBe( 200 );
        expect( response.type ).toBe( 'text/html' );
        expect( response.text.startsWith( '<!doctype html>' ) ).toBeTruthy();
        expect( response.text.indexOf( '<title>STORD URL Shortener Exercise</title>' ) ).toBeGreaterThan( -1 );
    } );
    test( "It GET /error404.html should respond with an static file", async () => {
        const response = await request( App ).get( "/error404.html" );
        expect( response.statusCode ).toBe( 200 );
        expect( response.type ).toBe( 'text/html' );
        expect( response.text.startsWith( '<!doctype html>' ) ).toBeTruthy();
        expect( response.text.indexOf( '<title>STORD URL Shortener Exercise - Error 404</title>' ) ).toBeGreaterThan( -1 );
    } );
} );