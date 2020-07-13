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
        console.log(`
            Name: ${this.name},
            Job Title: ${this.jobTitle},
            Salary: ${this.salary},
            Status: ${this.status}
        `)
        //console.log('Name: ' + this.name + '\nJob Title: ' + this.jobTitle)
    }

}

const employee1 = new Employee("Whilma Flinstone", "Teacher", "100,000/yr")
const employee2 = new Employee("Fred Flinstone", "Forman", "50,000/yr")
const employee3 = new Employee("Barney Rubble", "Welder", "40,000/yr")

employee3.changeStatus("Contract")

employees.push(employee1, employee2, employee3)

for(let i = 0; i < employees.length; i++){
    employees[i].printEmployeeForm()
}

//console.log(emp1)
//console.log(employees.push(emp1))

// employee2.printEmployeeForm()
// employee3.printEmployeeForm()

// Employee.printEmployeeForm = function(){
//     return employees.push(Employee)
// }
// printEmployeeForm()

// console.log(employee1)
// console.log(employee2)
// console.log(employee3)

