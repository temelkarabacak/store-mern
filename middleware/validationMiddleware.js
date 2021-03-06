const { check } = require('express-validator');

exports.categoryValidation = [
    check('categoryName', "Please enter a name min 2, max 20 chars").isLength({min: 2, max: 20}),
    check('description', "Please enter a name max 200 chars").isLength({max: 200})
]