const mongoose = require('mongoose');

mongoose
    .connect("mongodb://Localhost/mean-emploees",{
        useUnifiedTopology: true,
        useNewUrlParser: true

    })
    .then((db) => console.log("Db is connected"))
    .catch((err) => console.error(err));

