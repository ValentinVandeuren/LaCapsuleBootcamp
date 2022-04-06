var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
}
mongoose.connect('mongodb+srv://admin:bCilLk6INs8wtr9L@cluster0.lgzd3.mongodb.net/mabasededonne?retryWrites=true&w=majority', options,        
    function(err) {
      console.log(err);
    }
);
mongoose.connection.on("connected", () => console.log("La DB est connectée!"));

var mealSchema = mongoose.Schema({
    meal: String,
    name: String,
    delivery: String,
    address: String,
    phone: String,
    beverage: String
});
var mealModel = mongoose.model('meals', mealSchema);

module.exports = mealModel;