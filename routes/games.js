const express = require('express');
const router = express.Router();
const cors = require('cors');

router.use(cors());

/*** ---------------
Card example:
{
    "image": "https://deckofcardsapi.com/static/img/8C.png",
    "value": "8",
    "suit": "CLUBS",
    "code": "8C"
}
--------------- ***/

router.get('/', function(req, res, next) {
    req.app.locals.db.collection('games').find().toArray()
    .then(results => {
        console.log(results);
        res.send(results);
    })
});

router.post('/', function(req, res, next) {
    req.app.locals.db.collection('games').insertOne({
        game_id: req.body.gameId,
        player_1: {
            player_id: req.body.playerOneId,
            cards: req.body.playerOneCards,
            placed_groups: req.body.playerOnePlacedGroups
        },
        player_2: {
            player_id: req.body.playerTwoId,
            cards: req.body.playerTwoCards,
            placed_groups: req.body.playerTwoPlacedGroups
        }
    })
});

let game = [
    {
        game_id: '',
        player_1: {
            player_id: '',
            cards: [], // Cards are objects
            placed_groups: [] // Each group as object array
        },
        player_2: {
            player_id: '',
            cards: [],
            placed_groups: []
        }
    }
];

module.exports = router;