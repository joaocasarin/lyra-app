import { Employees } from '../interfaces/Employees';
import { LaborCodes } from '../interfaces/LaborCodes';
import { Employee } from './Employee.class';
import { LaborCode } from './LaborCode.class';

export class Company {
    private name: string;
    private country: string;
    private state: string;
    private city: string;
    private employees: Employees;
    private laborCodes: LaborCodes;

    constructor() {
        this.name = 'Lyra App';
        this.country = 'United States';
        this.state = 'California';
        this.city = 'Santa Cruz';

        this.employees = {};
        this.laborCodes = {};
    }

    get Name(): string {
        return this.name;
    }

    get Location() {
        return `${this.city}, ${this.state}, ${this.country}`;
    }

    public addEmployee(employee: Employee): void {
        this.employees[employee.Pid] = employee;
    }

    get Employees(): Employees {
        return this.employees;
    }

    public addLaborCode(laborCode: LaborCode): void {
        this.laborCodes[laborCode.Year] = laborCode;
    }

    get LaborCodes(): LaborCodes {
        return this.laborCodes;
    }
}

export const company = new Company();
