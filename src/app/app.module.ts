import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PhoneContainerComponent } from './phone-container/phone-container.component';
import { PhoneCardComponent } from './phone-card/phone-card.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';

import { PhoneApiService } from './services/phone-api.service';
import { SessionService } from './services/session.service';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent,
      children: [
        { path: 'phones', component: PhoneContainerComponent, canActivate: [SessionService] },
        { path: 'phones/:id', component: PhoneDetailComponent, canActivate: [SessionService] },
      ] },
  { path: 'home', component: HomeComponent },    
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PhoneContainerComponent,
    PhoneCardComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    PhoneDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PhoneApiService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
