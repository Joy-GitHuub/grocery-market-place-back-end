const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please Provide Your First Name.'],
        trim: true,
        maxLength: [10, 'Please Provide a Short Name'],
    },

    lastName: {
        type: String,
        required: [true, 'Please Provide Your Last Name.'],
        trim: true,
        maxLength: [10, 'Please Provide a Short Name'],
    },

    userEmail: {
        type: String,
        required: [true, 'Please Provide Your Email Address'],
        trim: true,
        unique: [true, "You Already Login.."],
        lowercase: true,
        validate: {
            validator: function (v) {
                return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(v);
            },
            message: props => `${props.value} is not a valid Email`
        },
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [6, 'Please Provide a Valid Password'],
    },

    confirmPassword: {
        type: String,
        required: [true, ' Confirm Password is required'],
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: `Password don't match!`,
        },
    },

    role: {
        type: String,
        enum: ['buyer', 'store-manager', 'admin'],
        default: 'buyer',
    },

    status: {
        type: String,
        default: 'active',
        enum: ['active', 'inactive', 'blocked'],
    },

    order: [{

    }],

    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
}, {
    timestamps: true,
});

const user = mongoose.model('User', userSchema);

module.exports = user;