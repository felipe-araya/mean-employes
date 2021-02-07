const { Schema, model } = require('mongoose');

const employeeSchema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: false },
    office: { type: Number, required: false },
    salary: { type: Number, required: false },
}, {
    timestamps: true,
    versionKey: false

}
);

module.exports = model("Employee", employeeSchema);