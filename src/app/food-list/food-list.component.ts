import { Component, OnInit } from '@angular/core';
import comidas from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor() { }
  show = false;
  foods:Object[] = comidas;
  nuevaComida = {};
  todayList = [];
  totalCalories = 0;

  addToday(food){
  this.todayList.map(f=>{
    if(f.name===food.name){
      f.quantity++;
    }
  })
  this.todayList = [...this.todayList.filter(f=>f.name!==food.name), food] 
this.totalCalories+=food.calories;  
}


  addFood(){
    this.show = true;
  }

  pushToFoods(){
    this.foods.unshift(this.nuevaComida);
    this.show = false;
  }

  ngOnInit() {
  }

  submitForm(myForm) {
    console.log(myForm);
  }

}
