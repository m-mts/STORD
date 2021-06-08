module.exports = {
    sequelize: {},
    models: {
        URL: {
            add: async ( s ) => [[{ slug: 'bbb' }]],
            findBySlug: async ( s ) => ( { slug: 'bbb', url: 'https:\\sample.addr' } )
        }
    }
};