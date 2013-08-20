/**
 * HomeController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

var HomeController = {

    index: function (req,res)
    {

        console.log(req.user);
        res.view({
            user: req.user
        });
    }

};
module.exports = HomeController;