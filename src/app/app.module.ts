import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- NgModel lives here

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatMenuModule} from '@angular/material/menu'


import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { XxComponent } from './toolbar/xx/xx.component';
import { MessagesComponent } from './messages/messages.component';
import { TestIconComponent } from './icon/test-icon/test-icon.component';

import { RouterModule, Routes } from '@angular/router';
import { Page2Component } from './page2/page2.component';
import { HighlightDirective } from './highlight.directive'
import { FillcolorDirective } from './fillcolor.directive';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MenuComponent } from './menu/menu.component'

import { HttpClientModule } from '@angular/common/http';
import { Page3Component } from './page3/page3.component'


const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component}

]

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    ToolbarComponent,
    SidebarComponent,
    XxComponent,
    MessagesComponent,
    TestIconComponent,
    Page2Component,
    HighlightDirective,
    FillcolorDirective,
    DropdownComponent,
    MenuComponent,
    Page3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule.forRoot(routes),
    // TestIconComponent
    MatMenuModule,
    HttpClientModule
  ],
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule,
    // TestIconComponent
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
