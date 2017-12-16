/**
 * TesttController
 *
 * @description :: Server-side logic for managing testts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    "test": function(req, res) {
        return res.send('derp');
    },
    "dbread": function(req, res) {
        Testt.find().exec(function(err, record) {
            console.log("record", record, "this sentence is false");
            return res.json(record);
        });
    }
};
