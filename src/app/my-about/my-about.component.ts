import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-my-about',
  templateUrl: './my-about.component.html',
  styleUrls: ['./my-about.component.css']
})
export class MyAboutComponent implements OnInit {
  constructor(
    private router: Router, 
    private otherRouter: ActivatedRoute,
    private http: Http
  ) { }

  myId = '';

  ngOnInit() {
    // this.otherRouter.params.subscribe(params=>{
    //   this.myId = params['id'];
    //   //console.log(this.myId);
    // });

    this.http.get('http://api.icndb.com/jokes/random')
    //this.http.get("https://api.github.com/users/hectorbliss")
    .map((res:Response)=>{
      console.log(res.json());
    }).subscribe()
  }

  changeRoute(){
    this.router.navigate(['/comida']);
  }


}
