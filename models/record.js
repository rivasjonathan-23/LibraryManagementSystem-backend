const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Record = new Schema({
    borrowerName: { type: String, required: true },
    borrowerAddress: { type: String, required: false },
    borrowerIdNumber: { type: String, required: true },
    borrowedBooks: [{ type: Schema.Types.ObjectId, ref: "Book", required: false }],
    returnDate: {type: Date, required: true},
    returned: {type: Boolean, required: false, default: false}
},
    { timestamps: true }
);

module.exports.Record = mongoose.model(
    "Record",
    Record
);