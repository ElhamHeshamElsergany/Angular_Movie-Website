import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup ,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css']
})
export class RegestrationComponent implements OnInit {
  error:string=''
registerform : FormGroup= new FormGroup({
  first_name:new FormControl(null , [Validators.required,Validators.minLength(3), Validators.maxLength(8)]),
  last_name:new FormControl(null , [Validators.required,Validators.minLength(3), Validators.maxLength(8)]),
  age:new FormControl(null , [Validators.required,Validators.min(18), Validators.max(80)]),
  email:new FormControl(null , [Validators.required,Validators.email]),
  password:new FormControl(null , [Validators.required,Validators.pattern(/^[A-Z][a-z]{2,8}$/)]),


})

constructor(public _AuthService:AuthService , public _Router:Router) { }

ngOnInit(): void {
}


submitRegisterForm(registerform:FormGroup){
if(registerform.valid){
  this._AuthService.register(registerform.value).subscribe((respons)=>{

    if(respons.message == 'success'){
    this._Router.navigate(['login'])
    }
    else{
      this.error=respons.errors.email.message;
      
    }

  })
}
}

 
}
