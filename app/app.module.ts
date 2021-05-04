import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import{ HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyLocationComponent } from './faculty-location/faculty-location.component';
import { FacultyQualificationComponent } from './faculty-qualification/faculty-qualification.component';
import { BangaloreLocationComponent } from './bangalore-location/bangalore-location.component';
import { HyderabadLocationComponent } from './hyderabad-location/hyderabad-location.component';
import { MysoreLocationComponent } from './mysore-location/mysore-location.component';
import { MeDegreeComponent } from './me-degree/me-degree.component';
import { DrDegreeComponent } from './dr-degree/dr-degree.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FacultyComponent,
    FacultyLocationComponent,
    FacultyQualificationComponent,
    BangaloreLocationComponent,
    HyderabadLocationComponent,
    MysoreLocationComponent,
    MeDegreeComponent,
    DrDegreeComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
