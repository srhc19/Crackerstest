import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AuthGoogleService } from '../../services/auth-google.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  loginForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,private authGoogleService:AuthGoogleService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      device: ['', Validators.required]
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.isLoading = true;

      const loginDetails = {
        username: this.loginForm.value.username,
        device: this.loginForm.value.device,
        social_auth: 1 
      };

      this.authService.googleLogin(loginDetails).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          // this.authService.getUserCourses().subscribe({
          //   next:(response)=>{
          //     console.log("courselidt",response)
              
          //   }
          // })
           this.router.navigate(['/courses']); 
        },
        error: (error) => {
          console.error('Login failed:', error);
          this.isLoading = false;
        }
      });
      setTimeout(() => {
        console.log('Form Data:', this.loginForm.value);
        this.isLoading = false;
      }, 2000);
    }
  }
  register(){
    this.router.navigate(['/courses'])
  }

  loginWithGoogle() {
    this.authGoogleService.login();
  }
}
