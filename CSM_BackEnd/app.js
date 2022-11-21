
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const csmdb = require('./data/passenger');
const Handlebars = require('handlebars');


cabsignup();
cabHome();
cabsignin();
cabbook();
contact();


const server = http.createServer(function (req, res) {
    const link = url.parse(req.url, true);
    const query = link.query;
    const page = link.pathname;
    console.log(page);

    //--------------------HomePage ------------------
    if (page == "/") {

        csmdb.getAll((err, result) => {

            var context = { data: result };
            let t = renderTemplate('index', context);
        
            res.end(t);

        });

    }
    //-----------  cabhome------------
    else if (page == "/csmdb/home" && req.method == "GET") {
       
        let template = renderTemplate('home', {});
        res.end(template);
    }
   
    
    //-----------  cabsignin------------
    else if (page == "/csmdb/cabsignin" && req.method == "GET") {
       
        let template = renderTemplate('cabsignin', {});
        res.end(template);
    }
    //-----------  cab_booking------------
    else if (page == "/csmdb/cabbook" && req.method == "GET") {
       
        let template = renderTemplate('cabbook', {});
        res.end(template);
    }
    //-----------  contact------------
    else if (page == "/csmdb/contact" && req.method == "GET") {
       
        let template = renderTemplate('contact', {});
        res.end(template);
    }

     //-----------  cabsignup------------
     else if (page == "/csmdb/cabsignup" && req.method == "GET") {
        
        let template = renderTemplate('cabsignup', {});
        res.end(template);
    }
    //------------------------for insertion -------------------------
    else if (page == "/csmdb/cabsignup" && req.method == "POST") {
    

        let formData = '';
        req.on('data', function (data) {
            formData += data.toString();

        });
        req.on('end', function () {
            let userData = qs.parse(formData);
            csmdb.addOne(userData.Firstname,userData.Lastname,userData.DOB,userData.Mobile, userData.Email_id, userData.Password, (err, result) => {
                var context = {
                    result: {

                        success: true,
                        errors: []
                    }
                };

                if (err) {
                    console.log(err);
                    context.result.success = false;

                }
                let t = renderTemplate('cabsignup', context);
                res.end(t);


            });

        });
    }

    else if(page.startsWith("/static/")){
        // console.log(page);
        let fileName = page.replace("/static/", "");
        // console.log(fileName);
        var file = fs.readFileSync("statics/" + fileName);
        res.end(file);
    }
 
});
server.listen(80);


function renderTemplate(name, data) {

    var filePath = path.join(__dirname, "templates", name + ".hbs");
    let templateText = fs.readFileSync(filePath, "utf8");
    let template = Handlebars.compile(templateText);
    return template(data);
}


function cabsignup() {

    var filePath = path.join(__dirname, "templates", "cabsignup.hbs");
    let templateText = fs.readFileSync(filePath, 'utf8');
    Handlebars.registerPartial("cabsignup", templateText)
    
}

function cabHome() {

    var filePath = path.join(__dirname, "templates", "home.hbs");
    let templateText = fs.readFileSync(filePath, 'utf8');
    Handlebars.registerPartial("home", templateText)
    
}
function cabsignin() {

    var filePath = path.join(__dirname, "templates", "cabsignin.hbs");
    
    let templateText = fs.readFileSync(filePath, 'utf8');
    Handlebars.registerPartial("cabsignin", templateText)
    
}
function cabbook() {

    var filePath = path.join(__dirname, "templates", "cabbook.hbs");

    let templateText = fs.readFileSync(filePath, 'utf8');
    Handlebars.registerPartial("cabbook", templateText)
    
}
function contact() {

    var filePath = path.join(__dirname, "templates", "contact.hbs");

    let templateText = fs.readFileSync(filePath, 'utf8');
    Handlebars.registerPartial("contact", templateText)
    
}


