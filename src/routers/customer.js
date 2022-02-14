
const customerRoute = (app, fs) =>{

    const data=`src/assests/data.json`;

    app.get('/customers', (req,res)=> {

        fs.readFile(data, 'utf8', (err, data) =>{
            if(err){
                throw err;
            }
            res.send(data);
        });
    });

    app.get('/customers/:id', (req, res) =>{
        fs.readFile(data, 'utf8', (err, data) => {
            let customers = JSON.parse(data);
            let customer = customers.find(record => record.id ===req.params.id);
            if(!customer){
                res.writeHead(404, "text/html")
                res.end(`<h1>No data Found</h1>`);
            }
            res.send(JSON.stringify(customer));
        });
    });
};

module.exports = customerRoute;