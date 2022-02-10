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