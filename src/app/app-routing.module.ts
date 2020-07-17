import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistertionComponent } from './registertion/registertion.component';
import { WelcomehomeComponent } from './welcomehome/welcomehome.component';
import { HeaderComponent } from './header/header.component';
import { OptionsComponent } from './options/options.component';
import { FindbyRegisternumberComponent } from './options/findby-registernumber/findby-registernumber.component'
import { FindbyColorComponent } from './options/findby-color/findby-color.component'




const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistertionComponent},
  {path:'header',component:HeaderComponent},
  {path:'welcome',component:WelcomehomeComponent},
  {path:'options' ,component:OptionsComponent},
  {path:'registernumber',component:FindbyRegisternumberComponent},
  {path:'color',component:FindbyColorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
