import { Injectable } from '@angular/core';
import foods from '../foods';

@Injectable()
export class CounterService {
    count: number = 0;
    constructor() { }

    increment() {
        this.count++;
        console.log(`Count is now ${this.count}`);
    }

    getFoods(){
        return foods;
    }

    getGatoPulpo(){
        return fetch("https://api.github.com/users/hectorbliss")
        .then(res=>res.json())
        .then(r=>r);
    }
}