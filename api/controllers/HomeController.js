/*---------------------
	:: Home 
	-> controller
---------------------*/
var HomeController = {

    index: function (req,res)
    {
        res.view({
            user: req.user
        });
    }

};
module.exports = HomeController;