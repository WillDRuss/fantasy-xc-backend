const model = require('../model/model.js')


const runnersHandle = (req, res) => {
    res.json(model.runners);
}

module.exports = {
    runnersHandle
}