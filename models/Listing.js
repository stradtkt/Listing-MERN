const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ListingSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    desc: {
        type: String,
        required: false,
        trim: true
    },
    image: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    weight: {
        type: Number
    },
    deminsions: {
        type: [Number]
    },
    phone_number: {
        type: String
    },
    address: [
        {
            street: {
                type: String
            },
            street2: {
                type: String
            },
            apt_no: {
                type: String
            },
            city: {
                type: String
            },
            state: {
                type: String
            },
            zip: {
                type: String
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Listing = mongoose.model('listing', ListingSchema);