const express = require('express');
const router = express.Router();
const cors = require('cors');
const fetch = require('node-fetch');

router.use(cors());

/*** ---------------
Card example:
{
    "image": "https://deckofcardsapi.com/static/img/8C.png",
    "value": "8",
    "suit": "CLUBS",
    "code": "8C"
}

https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
--------------- ***/

router.get('/', async function(req, res, next) {
    const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    fetch(url)
    .then(res => res.json())
    .then(json => res.send(json))
});


module.exports = router;