const runners = require('../json_files/runners.json')

const runnersHandle = (req, res) => {
    res.json(runners);
}

module.exports = {
    runnersHandle
}