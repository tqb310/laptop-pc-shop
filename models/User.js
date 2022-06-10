const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['admin', 'user'],
            default: 'user',
        },
    },
    { timestamps: true },
);

// userSchema.methods.hashPassword = function (password) {
//     return bcrypt.hash(password, bcrypt.genSaltSync(5));
// };

//Methods
userSchema.methods.validatePassword = function (
    candidatePassword,
) {
    if (this.password) {
        return bcrypt.compareSync(
            candidatePassword,
            this.password,
        );
    }
    return false;
};

//Midleware
userSchema.pre('save', function (next) {
    bcrypt
        .hash(this.password, bcrypt.genSaltSync(5))
        .then(password => {
            this.password = password;
            next();
        });
});
module.exports = mongoose.model('User', userSchema);
