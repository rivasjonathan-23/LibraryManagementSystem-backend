const { Book } = require("../models/book")
const { Record } = require("../models/record")

module.exports.getBooks = (req, res) => {
    Book.find().then(books => {
        res.send(books)
    }).catch(error => {
        res.status(500).json(error.message)
    })
}

module.exports.createRecord = (req, res) => {
    var date = new Date()
    date.setDate(date.getDate() + 1)
    let record = { ...req.body, returnDate: date }
    const newRecord = new Record(record)
    newRecord.save().then(result => {
        res.status(200).json(result)
    }).catch(error => {
        res.status(500).json(error.message)
    })
}

module.exports.getRecords = (req, res) => {
    Record.find().populate({ path: "borrowedBooks", model: "Book" }).then(records => {
        res.status(200).json(records)
    }).catch(error => {
        res.status(500).json(error.message)
    })
}

module.exports.updateRecord = (req, res) => {
    Record.findByIdAndUpdate(
        req.params.recordId,
        req.body,
        { upsert: true },
        function (err, result) {
            if (err) {
                return res.status(500).json(err.message);
            }
            Record.findById(result._id).then(record => {
                res.status(200).json(record);
            })
        }
    );
}

module.exports.deleteRecord = (req, res) => {
    Record.deleteOne({_id: req.params.recordId}).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json(error.message);
    })
}