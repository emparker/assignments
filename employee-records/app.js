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
const employee4 = new Employee("Franny Banny", "Nanny", "80K a day")

employee3.changeStatus("Contract")
employee4.changeStatus("Independant")

employees.push(employee1, employee2, employee3, employee4)

for(let i = 0; i < employees.length; i++){
    employees[i].printEmployeeForm()
}


