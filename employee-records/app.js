const employees = []

function Employee(name, jobTitle, salary){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
    this.changeStatus = function (work){
        this.status = work
    }
    this.printEmployeeForm = function(){
        console.log("")
    }

}

const employee1 = new Employee("Whilma Flinstone", "Teacher", "100,000/yr")
const employee2 = new Employee("Fred Flinstone", "Forman", "50,000/yr")
const employee3 = new Employee("Barney Rubble", "Welder", "40,000/yr")

employee3.changeStatus("Contract")

const emp1 = employee1.printEmployeeForm()
console.log(employees.push(emp1))

// employee2.printEmployeeForm()
// employee3.printEmployeeForm()

// Employee.printEmployeeForm = function(){
//     return employees.push(Employee)
// }
// printEmployeeForm()

console.log(employee1)
console.log(employee2)
console.log(employee3)

