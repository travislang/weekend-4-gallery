const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.module');
// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const sqlText = `UPDATE "images" SET "likes" = likes+1
    WHERE "id" = $1;`;
    pool.query( sqlText, [galleryId] )
    .then( result => {
        res.sendStatus( 201 );
    }).catch( err => {
        console.log( 'error in DB PUT query:', err );
        res.sendStatus( 500 );
    })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let sqlText = `SELECT * FROM "images" ORDER BY "id" ASC;`;
    pool.query( sqlText )
    .then( result => {
        res.send( result.rows );
    }).catch( err => {
        console.log( 'error in DB GET query:', err );
        res.sendStatus( 500 );
    })
}); // END GET Route

// POST ROUTE
router.post('/', ( req, res ) => {
    const image = req.body;
    const sqlText = `INSERT INTO "images"("path", "description")
    VALUES ($1, $2);`;
    pool.query( sqlText, [image.path, image.desc] )
    .then( result => {
        res.sendStatus( 201 );
    }).catch( err => {
        console.log('error in POST route:', err );
        res.sendStatus( 500 );
    }); // end query
}); // end POST route

// DELETE ROUTE
router.delete('/:id', ( req, res ) => {
    const id = req.params.id;
    const sqlText = `DELETE FROM "images"
    WHERE "id" = $1;`;
    pool.query( sqlText, [id] )
    .then( result => res.send( result.rows ) )
    .catch( err => res.sendStatus( 500 ) );
})

module.exports = router;