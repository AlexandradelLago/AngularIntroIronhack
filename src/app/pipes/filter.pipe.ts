import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(foods:Object[], field:string, search:string): any {
    if(!foods) return [];
    if(!search) return foods;
    const expresion = new RegExp(search, "i");

    return foods.filter(food=>expresion.test(food[field]));

  }

}
