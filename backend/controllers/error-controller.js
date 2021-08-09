const HttpError = require('../models/http-error');

const error = (req,res,next) =>{
    const err = new HttpError(
        '404 Page Not Found, Please go back!',
        404
    );
    console.log(err);
    return(err);
}
exports.error = error;