var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
}
mongoose.connect('mongodb+srv://blackboard:KRsEro8HYOIzopFX@cluster.dq2na.mongodb.net/blackboard', options,        
    function(err) {
      console.log(err);
    }
);
mongoose.connection.on("connected", () => console.log("La DB est connectée!"));