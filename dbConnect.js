//---------------------------💔🚬 ᶻᵉʳᵒ༄ᴩᴏᴡᴇʀ💔🚬---------------------------//

const mongoose = require("mongoose");

mongoose.connect('mongodb://192.168.1.39:2020/Discord',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((db) => {
    console.log("[✅] DB Connected Successfully.");
}).catch((error) =>{
    console.log("[❌] DB Failed To Connect.", error)
})



module.exports = exports = mongoose;

//---------------------------💔🚬 ᶻᵉʳᵒ༄ᴩᴏᴡᴇʀ💔🚬---------------------------//