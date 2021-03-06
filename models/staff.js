const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name: String,
    dob: Date,
    imageurl: String,
    hobbies: [String]
})

const Staff = mongoose.model('Staff', staffSchema)

readStaff = async(options = {}) => {
    if (Object.entries(options).length == 0)
        return Staff.find().lean();

    else if (options.name)

        return Staff.findOne(options).lean();

    else
        return undefined;

}

exports.readStaff = readStaff;