interface Month {
    [key: string]: number;
}

interface Year {
    [key: string]: Month;
}

export interface WorkingDate {
    [key: string]: Year;
}
