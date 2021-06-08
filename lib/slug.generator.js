const slugs = [];

function generate( set, prefix, n, k ) {
    if ( k == 0 ) {
        slugs[Math.random() > .5 ? "push" : "unshift"]( prefix );
        return;
    }

    for ( let i = 0; i < n; ++i ) {
        let newPrefix = prefix + set[i];
        generate( set, newPrefix, n, k - 1 );
    }
}

module.exports = {
    generate: ( alphabet, size ) => {
        generate( alphabet, "", alphabet.length, size );
        slugs.sort( () => ( Math.random() > .5 ) ? 1 : -1 );
        return slugs;
    }
}