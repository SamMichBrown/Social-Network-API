const { Schema, model } = require('mongoose');

const UserSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        trim: true,
        required: 'A Username is required'
    },
    email: {
        type: String,
        required: ' An Email is required',
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
}
);

const User = model('User', UserSchema);

// get total count of thoughts and reactions
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

module.exports = User;