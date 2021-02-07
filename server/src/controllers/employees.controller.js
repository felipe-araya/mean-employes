const employeeCtrl = {}
const Employee = require('../models/Employee')

employeeCtrl.getEmployees    = async (req, res) => {
    const employees = await Employee.find()
    res.json(employees)
}
employeeCtrl.createEmployee  = async (req, res) => {
    const newEmployee = new Employee(req.body)
    
    await newEmployee.save()
    res.send ({message: 'Employee Created'})
}
employeeCtrl.getEmployee     = (req, res) => {}
employeeCtrl.editEmployee    = (req, res) => {}
employeeCtrl.deleteEmployee  = (req, res) => {}

module.exports = employeeCtrl;