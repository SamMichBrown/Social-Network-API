const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// POST A THOUGHT //
router
.route('/')
.post(addThought);

// GET ALL THOUGHTS //
router
.route('/')
.get(getAllThoughts);


// GET, PUT AND DELETE THOUGHT BY ID //
router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

// POST A REACTION //
router
.route('/:thoughtId/reactions')
.post(addReaction);

// DELETE A REACTION //
router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;