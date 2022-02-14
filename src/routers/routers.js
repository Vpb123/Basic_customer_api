
const customerRoute = require('./customer');

const defaultRouter = (app, fs) =>{

    app.get('/', (req, res) => {
        res.send('Welcome to the customer api');
    });

    customerRoute(app, fs);
};

module.exports = defaultRouter;