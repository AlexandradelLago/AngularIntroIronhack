import {Injectable} from '@angular/core';

@Injectable()
export class UserService{
    constructor(){}
    user = {
        name: "BlisS",
        age: 30,
        photoURL:"https://scontent-sea1-1.cdninstagram.com/vp/8d4b534cd37c971b48edecd31ad7290e/5B193B84/t51.2885-15/s480x480/e15/11005044_792581194156715_392651226_n.jpg?ig_cache_key=OTI3NTM4MTcyMTgyNjgxMTI3.2",
        email:"bliss@ironhack.com"
    }
    
}