import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistertionComponent } from './registertion/registertion.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomehomeComponent } from './welcomehome/welcomehome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OptionsComponent } from './options/options.component';
import { FindbyColorComponent } from './options/findby-color/findby-color.component';
import { FindbyRegisternumberComponent } from './options/findby-registernumber/findby-registernumber.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistertionComponent,
    WelcomehomeComponent,
    HeaderComponent,
    FooterComponent,
    OptionsComponent,
    FindbyColorComponent,
    FindbyRegisternumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
