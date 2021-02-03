const express = require ('express')
const router = express.Router()

const employeesCtrl = require('../controllers/employees.controller.js')

router.get ('/', employeesCtrl.getEmployees);

router.post ('/', employeesCtrl.createEmployee);

router.get ('/:id', employeesCtrl.getEmployee);

router.put ('/', employeesCtrl.editEmployee);

router.delete ('/', employeesCtrl.deleteEmployee);

module.exports = router