import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BangaloreLocationComponent } from './bangalore-location/bangalore-location.component';
import { DrDegreeComponent } from './dr-degree/dr-degree.component';
import { FacultyLocationComponent } from './faculty-location/faculty-location.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HyderabadLocationComponent } from './hyderabad-location/hyderabad-location.component';
import { MeDegreeComponent } from './me-degree/me-degree.component';
import { MysoreLocationComponent } from './mysore-location/mysore-location.component';


const routes: Routes = [
  {path:'faculty',component:FacultyComponent},
    {path:'facultylocation',component:FacultyLocationComponent,
    children:[
      {path:'mysore',component:MysoreLocationComponent},
      {path:'bangalore',component:BangaloreLocationComponent},
      {path:'hyderabad',component:HyderabadLocationComponent}

    ],
  },
  {path:'faculty-qualification',component:FacultyLocationComponent,
children:[
  {path:'me',component:MeDegreeComponent},
  {path:'dr',component:DrDegreeComponent}
],
}
    
  ]

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
