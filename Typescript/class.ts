class Employee {

    private id: number;
    name: string;
    address: string;

    constructor(id: number, name: string, address: string) {
        this.address = address;
        this.id = id;
        this.name = name;
    };

    getEmployee() {
        return `${this.name} staying at ${this.address}`
    }

}

let john = new Employee(1, "John", "Chennai");
let address = john.getEmployee();
console.log(address);



class Manager extends Employee {
    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }
}