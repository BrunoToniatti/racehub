import { Routes } from '@angular/router';
import { FirstPageLayoutComponent } from './first-page/components/first-page-layout/first-page-layout.component';
import { LoginPageLayoutComponent } from './login-page/components/login-page-layout/login-page-layout.component';
import { SignInLayoutPageComponent } from './sign-in/components/sign-in-layout-page/sign-in-layout-page.component';


export const routes: Routes = [
    {
      path: "",
      component: FirstPageLayoutComponent
    },
    {
      path: "login",
      component: LoginPageLayoutComponent
    },
    {
      path: "register",
      component: SignInLayoutPageComponent
    }
];
