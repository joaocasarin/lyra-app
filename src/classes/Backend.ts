import { startOfWeek, isSaturday, isSunday } from 'date-fns';
import { Employees } from '../interfaces/Employees';
import { LaborCodes } from '../interfaces/LaborCodes';
import { company } from './Company.class';
import { Employee } from './Employee.class';
import { LaborCode } from './LaborCode.class';

export function getEmployees(): Employees {
    return company.Employees;
}

export function getEmployee(pid: number): Employee {
    const employees = getEmployees();

    if (employees[pid] === undefined) {
        throw new Error(`Employee with PID-${pid} not found in the company.`);
    }

    return employees[pid]!;
}

export function didWorkOnDate(pid: number, date: Date): boolean {
    const year = date.getFullYear().toString();
    const month = date.getMonth().toString();
    const day = date.getDate().toString();

    const employee = getEmployee(pid);
    const workingDate = employee.WorkingDate[year]![month]![day];

    return workingDate !== undefined;
}

export function getLaborCodes(): LaborCodes {
    return company.LaborCodes;
}

export function getLaborCode(year: number): LaborCode {
    const laborCodes = getLaborCodes();

    if (laborCodes[year] === undefined) {
        throw new Error(`Labor code for ${year} doesn't exist.`);
    }

    return laborCodes[year]!;
}

export function addEmployee(pid: number, name: string, hourlyWage: number): void {
    const employees = getEmployees();
    const currentYear = new Date().getFullYear();
    const minHourlyWage = getLaborCode(currentYear).MinHourlyWage;

    if (hourlyWage < minHourlyWage) {
        throw new Error(`Hourly wage cannot be less than ${minHourlyWage}.`);
    }

    if (employees[pid] !== undefined) {
        throw new Error(`Employee already registered in the company.`);
    }

    const employee = new Employee(pid, name, hourlyWage);

    company.addEmployee(employee);
}

export function addLaborCode(minHourlyWage: number, maxHoursPerWeek: number): void {
    const currentYear = new Date().getFullYear();
    const laborCodes = getLaborCodes();

    if (laborCodes[currentYear] !== undefined) {
        throw new Error(`Labor code already exists.`);
    }

    const laborCode = new LaborCode(minHourlyWage, maxHoursPerWeek);

    company.addLaborCode(laborCode);
}

export function addWorkedHours(pid: number, date: Date, hours: number): void {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const isWeekend = isSaturday(date) || isSunday(date);

    const firstDayOfWeek = startOfWeek(date);

    if (isWeekend) {
        throw new Error(`${date.toLocaleDateString()} is a weekend.`);
    }

    if (!date || !hours) {
        throw new Error(`Invalid date or hours.`);
    }

    const employee = getEmployee(pid);

    const maxHours = getLaborCode(year).MaxHoursPerWeek;
    let totalHours = 0;

    const employeeWorked = didWorkOnDate(pid, date);

    if (employeeWorked) {
        throw new Error(
            `Employee ${employee.Name} already worked on ${date.toLocaleDateString()}.`
        );
    }

    for (let i = 0; i < 5; i++) {
        const weekDate = new Date(firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1));

        const didWorkThatDay = didWorkOnDate(pid, weekDate);

        if (didWorkThatDay) {
            const hoursWorked =
                employee.WorkingDate[year.toString()]![month.toString()]![day.toString()];
            totalHours += hoursWorked!;
        }
    }

    if (totalHours + hours > maxHours) {
        throw new Error(
            `Employee ${employee.Name} cannot work more than ${maxHours} hours per week.`
        );
    }

    employee.addWorkingDate(date, hours);
}
