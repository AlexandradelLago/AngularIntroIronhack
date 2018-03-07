import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-my-about',
  templateUrl: './my-about.component.html',
  styleUrls: ['./my-about.component.css']
})
export class MyAboutComponent implements OnInit {
  constructor(private router: Router, private otherRouter: ActivatedRoute) { }

  myId = '';

  ngOnInit() {
    this.otherRouter.params.subscribe(params=>{
      this.myId = params['id'];
      console.log(this.myId);
    });
  }

  changeRoute(){
    this.router.navigate(['/comida']);
  }


}
