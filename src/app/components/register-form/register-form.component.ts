import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AuthGoogleService } from '../../services/auth-google.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  registerForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder,private authService:AuthService,private authGoogleService:AuthGoogleService,private router:Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      mobile: ['', [Validators.required, Validators.pattern('^\\d{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      device: ['', Validators.required],
      userType: ['Client', Validators.required],
    });
  }

  get name() {
    return this.registerForm.get('name');
  }

  get mobile() {
    return this.registerForm.get('mobile');
  }

  get email() {
    return this.registerForm.get('email');
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      const registrationDetails = {
        name: this.registerForm.value.name as string,
        mobile: this.registerForm.value.mobile,
        email: this.registerForm.value.email,
        device: this.registerForm.value.device,
        user_type: this.registerForm.value.userType.toLowerCase(),
  
      };
console.log(registrationDetails)
      this.authService.registerUser(registrationDetails).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          this.router.navigate(['/login'])
        },
        error: (error) => {
          console.error('Registration failed:', error);
          this.isLoading = false;
        }
      });
    
      setTimeout(() => {
        console.log('Form Data:', this.registerForm.value);
        this.isLoading = false;
      }, 2000);
    }
  }
  login(){
    this.router.navigate(['/login'])
  }
  loginWithGoogle() {
    this.authGoogleService.login();
  }

}
