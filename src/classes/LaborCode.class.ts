import { v4 as uuid } from 'uuid';

export class LaborCode {
    private id: string;
    private year: number;

    constructor(private minHourlyWage: number, private maxHoursPerWeek: number) {
        this.id = uuid();
        this.year = new Date().getFullYear();
        this.minHourlyWage = minHourlyWage;
        this.maxHoursPerWeek = maxHoursPerWeek;
    }

    get Id(): string {
        return this.id;
    }

    get Year(): number {
        return this.year;
    }

    get MinHourlyWage(): number {
        return this.minHourlyWage;
    }

    get MaxHoursPerWeek(): number {
        return this.maxHoursPerWeek;
    }
}
