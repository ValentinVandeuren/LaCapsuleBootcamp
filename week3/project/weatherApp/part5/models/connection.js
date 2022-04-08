var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
}
mongoose.connect('mongodb+srv://admin:qhKvshtwrRWeQLWa@cluster0.baffg.mongodb.net/weatherData?retryWrites=true&w=majority', options,        
    function(err) {
      console.log(err);
    }
);
mongoose.connection.on("connected", () => console.log("La DB est connectée!"));