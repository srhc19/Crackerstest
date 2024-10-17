import { Routes } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CoursesComponent } from './components/courses/courses.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [{path:"",component:RegisterFormComponent},{path:"register",component:RegisterFormComponent},{path:"login",component:LoginFormComponent},{path:"courses",component:CoursesComponent},{path:"**",component:NotFoundComponent}];
