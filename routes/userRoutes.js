const express = require('express');
const router = express.Router();
const{getEmployee, addEmployee, getEmployeeById, editEmployee, deleteEmployee} = require('../controllers/userControllers')

router.route('/').get(getEmployee)
router.route('/employee').post(addEmployee)
router.route('/employee/:id').get(getEmployeeById)
router.route('/employee/:id').put(editEmployee)
router.route('/employee/:id').delete(deleteEmployee)

module.exports = router