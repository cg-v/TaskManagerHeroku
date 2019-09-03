const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://abc:abc@taskmanagerapplication-rx3fm.mongodb.net/TaskManager?retryWrites=true&w=majority', {useNewUrlParser : true}).then(() => {
    console.log('Connected to MOngoDB');
}).catch((e)=>{ 
    console.log('Error in coonection');
    console.log(e);
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports ={ mongoose };