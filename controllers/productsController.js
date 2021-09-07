const express = require('express')

const router = express.Router();
module.exports = {
    detail : (res,req) => {

    },
    add : (res,req) => {
        return res.render('productAdd')
    }
}