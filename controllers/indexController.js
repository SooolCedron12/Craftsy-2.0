/*agrege products y pusse los siguientes const fs , path y let products*/
const fs = require('fs');
const path = require('path');
let products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'))

module.exports = {
    index : (req,res) => {
        return res.render('index', { 
            title: 'Craftsy 2.0',
            products : JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'))
        });
    },
    admin : (req,res) => {
        return res.render('admin');

    }
}