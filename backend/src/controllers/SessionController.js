//index, show, store, update, destroy
const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const { email } = req.body; //Busca email dentro da extrutura

        let user = await User.findOne({ email });

        if(!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }
};