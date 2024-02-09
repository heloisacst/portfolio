import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ScrollTopComponent} from './scroll-to-top/scroll-top-component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { ContactComponent } from './contact/contact.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ScrollTopComponent,
    WhatsappComponent,
  ],
  imports: [CommonModule,
            BrowserModule,
            AppRoutingModule
           ],
  // Não declarar componentes aqui
  bootstrap: [AppComponent],
})

export class AppModule {}
