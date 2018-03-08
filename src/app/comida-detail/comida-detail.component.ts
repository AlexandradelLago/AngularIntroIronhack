import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comida-detail',
  templateUrl: './comida-detail.component.html',
  styleUrls: ['./comida-detail.component.css']
})
export class ComidaDetailComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  food= {};  

  ngOnInit() {
    this.router.params.subscribe(params=>{
     // this.food = foods.find(f=>f.name === params['name']);
    });
  }

}
