import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment.dev';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  router = inject(Router);
  private endpointPrefix = environment.apiUrl;
  formGroup!: FormGroup;
  
  constructor(private fb: FormBuilder, private http: HttpClient,) {}
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
  

  forgotPassword(){
    this.router.navigate(['/forgot-password']);
  }

  onSubmit() {
    if (!this.formGroup.valid) {
      this.formGroup.markAllAsTouched();
    } else {
      this.http
        .post(this.endpointPrefix + '/login', this.formGroup.value)
        .subscribe(
          (res: any) => {
            this.router.navigate(['/products']);
          },
          (err: any) => {
            console.log(err);
          }
        );
    }
  }

}
