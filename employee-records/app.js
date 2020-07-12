const employees = []

function Employee(name, jobTitle, salary){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
}

const employee1 = new Employee("Whilma Flinstone", "Teacher", "100,000/yr")
const employee2 = new Employee("Fred Flinstone", "Forman", "50,000/yr")
const employee3 = new Employee("Barney Rubble", "Welder", "40,000/yr")

Employee.prototype.printEmployeeForm = function(){
    // const emp1 = this.push(employees) 
    // console.log(emp1)
    //return this.name.jobTitle.salary.status

}

//console.log(employee1.status)
// const emp1 = employees.push(employee1)
// console.log(emp1)

