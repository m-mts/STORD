const express = require( 'express' );
const router = express.Router();
const { slugSize, slugAlphabet } = require( '../config' );

router.get( `/[${slugAlphabet}]{${slugSize}}`, require( '../lib/actions/get.slug' ) );

router.post( '/', require( '../lib/actions/post-url' ) );

module.exports = router;