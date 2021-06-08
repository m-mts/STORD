const { generate } = require( './slug.generator' );
describe.only( 'Slug generator tests', () => {
    test( "should generate", () => {
        const arr = generate( ['1', '2', '3'], 2 );
        expect( arr.length ).toBe( 9 );
        expect( arr.findIndex( v => v == '11' ) ).toBeGreaterThan( -1 );
        expect( arr.findIndex( v => v == '12' ) ).toBeGreaterThan( -1 );
        expect( arr.findIndex( v => v == '13' ) ).toBeGreaterThan( -1 );
        expect( arr.findIndex( v => v == '21' ) ).toBeGreaterThan( -1 );
        expect( arr.findIndex( v => v == '22' ) ).toBeGreaterThan( -1 );
        expect( arr.findIndex( v => v == '23' ) ).toBeGreaterThan( -1 );
        expect( arr.findIndex( v => v == '31' ) ).toBeGreaterThan( -1 );
        expect( arr.findIndex( v => v == '32' ) ).toBeGreaterThan( -1 );
        expect( arr.findIndex( v => v == '33' ) ).toBeGreaterThan( -1 );
    } );
} );