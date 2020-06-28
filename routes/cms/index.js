var express = require('express');
var router = express.Router();

var FoodRouter = require('./foods');
var MenuRouter = require('./menu')

var LoginController = require('../../controller/cms/login.controller')
//Thiện
var BaotriRouter = require('./baotri')


router.get('/', function (req, res, next) {
    res.render('cms/main_layout',{content:"dashboard/home",data:null});

    // if (req.session.user) {
    //     res.render('cms/main_layout',{content:"dashboard/home",data:null});
    // }
    // else {
    //     res.redirect('/cms/login');
    // }
});

router.route('/login')
    .get(function (req, res, next) {
        if (req.session.user) {
            res.redirect('/cms')
        }
        else res.render('cms/login/index');
    })
    .post(LoginController.checkLogin);
router.get('/logout', LoginController.logout)
router.use('/foods', FoodRouter);
router.use('/menu', MenuRouter);





//Thiện
//Bảo trì
router.use('/baotri',BaotriRouter );

module.exports = router;