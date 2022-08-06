var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/harryKart', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log("We are connected bro");
// });

var kittySchema = new mongoose.Schema({
    name: String
});


kittySchema.methods.speak = function () {
    var greeting = "My name is " + this.name
    console.log(greeting);
}

var Kitten = mongoose.model('harryKitty', kittySchema);

var harryKitty = new Kitten({ name: 'harryKitty Name' });
// console.log(harryKitty.name);
// harryKitty.speak();

harryKitty.save(function (err, harryKitty) {
    if (err) return console.log(err);
    harryKitty.speak();
});

Kitten.find({ name: "harryKitty Name"}, function (err, Kittens) {
    if (err) return console.error(err);
    console.log(Kittens);
});