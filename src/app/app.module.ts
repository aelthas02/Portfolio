import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutComponent } from './components/main-page/about/about.component';
import { SkillsComponent } from './components/main-page/skills/skills.component';
import { ContactComponent } from './components/main-page/contact/contact.component';
import { MenuIconComponent } from './components/menu-icon/menu-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    MainPageComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    MenuIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
