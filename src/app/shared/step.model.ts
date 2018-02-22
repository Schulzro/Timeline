import { Moment } from 'moment';

export interface Step {
    id: string;
    title: string;
    notes: string;
    align_right?: boolean;
    date?: Moment;
}
