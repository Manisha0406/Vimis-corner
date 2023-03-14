import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EcomService } from '../ecom.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 
  loginform!: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private service:EcomService ,private router:Router ) { }
    ngOnInit(): void {
      this.loginform = this.formBuilder.group({
        email: ['', [Validators.required,Validators.email]],
        password:['',Validators.required]
        
      });
  }
  login()
  {
    this.service.login(this.loginform.value).subscribe({
      next: (val) => { this.router.navigate(['/'])},
      error: (val) => { console.log(val) },
    })
   
  }
}
