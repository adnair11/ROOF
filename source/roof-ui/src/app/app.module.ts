import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PropertiesComponent } from './properties/properties.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './admin/signup/signup.component';
import { LoginSignupComponent } from './admin/login-signup/login-signup.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { UserprofileComponent } from './admin/userprofile/userprofile.component';
import { AddpropertyComponent } from './properties/addproperty/addproperty.component';
import { BookingComponent } from './booking/booking.component';
import { UploadComponent } from './upload/upload.component';
import { PropertyBookedComponent } from './properties/property-booked/property-booked.component';
import { TeamComponent } from './team/team.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ReviewComponent } from './review/review.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

import { DeleteBookingComponent } from './delete-booking/delete-booking.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RatingBasicComponent } from './rating-basic/rating-basic.component';


export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PropertiesComponent,
    AddPropertyComponent,
    PropertyDetailsComponent,
    AdminComponent,
    SignupComponent,
    LoginSignupComponent,
    FooterComponent,
    HomeComponent,
    LogoutComponent,
    UserprofileComponent,
    AddpropertyComponent,
    BookingComponent,
    PropertyBookedComponent,
    TeamComponent,
    AboutusComponent,
    UploadComponent,
    PropertyBookedComponent,
    ReviewComponent,
    ContactComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    DeleteBookingComponent,
    RatingBasicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
