import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { AdminComponent } from './admin/admin.component';
import { LoginSignupComponent } from './admin/login-signup/login-signup.component';
import { SignupComponent } from './admin/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';



const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'properties',component:PropertiesComponent},
  {path: 'properties/new', component: AddPropertyComponent },
  {path: 'properties/:_id', component: PropertyDetailsComponent },
  {path:'admin', component: AdminComponent},
  {path:'loginsignup', component: LoginSignupComponent},
  {path:'signup', component: SignupComponent},
  {path:'footer', component: FooterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
