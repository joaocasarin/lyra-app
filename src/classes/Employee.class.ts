import { v4 as uuid } from 'uuid';
import { WorkingDate } from '../interfaces/WorkingDate';

export class Employee {
    private id: string;
    private workingDate: WorkingDate;

    constructor(private pid: number, private name: string, private hourlyWage: number) {
        this.id = uuid();
        this.pid = pid;
        this.name = name;
        this.hourlyWage = hourlyWage;
        this.workingDate = {} as WorkingDate;
    }

    get Id(): string {
        return this.id;
    }

    get Pid(): number {
        return this.pid;
    }

    get Name(): string {
        return this.name;
    }

    set HourlyWage(hourlyWage: number) {
        this.hourlyWage = hourlyWage;
    }

    get HourlyWage(): number {
        return this.hourlyWage;
    }

    get WorkingDate(): WorkingDate {
        return this.workingDate;
    }

    public addWorkingDate(date: Date, hours: number) {
        const year = date.getFullYear().toString();
        const month = date.getMonth().toString();
        const day = date.getDate().toString();

        this.workingDate[year]![month]![day] = hours;
    }
}
