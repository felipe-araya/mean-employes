const employeeCtrl = {}

employeeCtrl.getEmployees    = (req, res) => {
    res.send ('get employees Madafaka')
}
employeeCtrl.createEmployee  = (req, res) => {
    res.send ('post employess Madafaka')
}
employeeCtrl.getEmployee     = (req, res) => {}
employeeCtrl.editEmployee    = (req, res) => {}
employeeCtrl.deleteEmployee  = (req, res) => {}

module.exports = employeeCtrl;