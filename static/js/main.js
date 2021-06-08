document.getElementById( 'output' ).innerHTML = location.href + '<span class="bg-blue-100">___</span>';
const getShortUrl = async () => {
    const res = await fetch( '/slugs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( { "url": document.getElementById( 'url' ).value } )
    } );
    if ( res.ok ) {
        const data = await res.json();
        if ( data?.data?.slug ) {
            const url = location.href + data.data.slug;
            document.getElementById( 'output' ).innerHTML = '<a href="' + url + '" target="_blank">' + location.href + '<span class="bg-blue-100">' + data.data.slug + '</span></a>';
            return;
        }
        if ( data?.data?.message ) {
            document.getElementById( 'output' ).innerHTML = '<span class="bg-red-100">' + data.data.message + '</span>';
            return;
        }
    }
    document.getElementById( 'output' ).innerHTML = '<span class="bg-red-100">Try late. Service not working.</span>';
}