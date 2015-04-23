var morgan      = require('morgan'), // used for logging incoming request
    bodyParser  = require('body-parser'),
    helpers     = require('./helpers.js'), // our custom middleware
    path        = require('path'),
    Link        = require('../links/linkModel'),
    linksController  = require('../links/linkController.js');


module.exports = function (app, express) {
  // Express 4 allows us to use multiple routers with their own configurations
  var userRouter = express.Router();
  var linkRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));

  app.use('/api/users', userRouter); // use user router for all user request

  // authentication middleware used to decode token and made available on the request
  //app.use('/api/links', helpers.decode);
  app.use('/api/links', linkRouter); // user link router for link request
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

  // inject our routers into their respective route files
  require('../users/userRoutes.js')(userRouter);
  require('../links/linkRoutes.js')(linkRouter);

  app.get('/favicon.ico', function(req, res) {
    res.set('Content-Type', 'image/x-icon');
    res.status(200).end();
  });

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
  });


  // app.param('code', linksController.findUrl);
  // app.get('/:code', linksController.navToLink);


  // app.get('/*', function(req, res) {
  //   Link.findOne({code: req.params[0]}, function(error,link) {
  //     if (!link) {
  //       res.redirect('/');
  //     } else {
  //       link.visits++;
  //       link.save(function(err) {
  //         if(err){
  //           helpers.errorHandler(err, req, res);
  //         } else {
  //           return res.redirect(link.url);
  //         }
  //       });
  //     }
  //   });
  // });


  // app.use('/*', function(req, res) {
  //   res.redirect('/#' + req.baseUrl);
  // });

  // app.use('/#*', function(req, res) {
  //   res.sendFile(path.join(__dirname, '../../client/index.html'));
  // });
};
