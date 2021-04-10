const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// GET ROUTE FOR USERS //
router
.route('/')
.get(getAllUsers)
.post(createUser);

// GET ONE, PUT AND DELETE //
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// ADD A FRIEND //
router
.route('/:id/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;