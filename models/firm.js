
const mongoose = require('mongoose');
const Product = require('./product');

const firmSchema = new mongoose.Schema({
    firmname: {
        type:String,
        required: true,
        unique: true
    },
    area: {
        type:String,
        required: true
    },
    category: {
        type:[
            {
                type:String,
                enum : ['veg','non-veg']
            }   
        ]
    },
    region: {
        type:[
            {
                type:String,
                enum : ['south-indian','north-indian','chinese','bakery']
            }
        ]  
    },
    offer: {
        type:String
    },
    image: {
        type:String
    
    },
    vendor: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vendor'
        }],
    products : [{
            type: mongoose.Schema.Types.ObjectId,
            ref : 'product'
        }]

});

const Firm = mongoose.model('Firm', firmSchema);

module.exports = Firm;
