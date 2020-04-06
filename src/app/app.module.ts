import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaComponent } from './area/area.component';
import { TitleComponent } from './area/title/title.component';
import { AdquiredSkillsComponent } from './area/adquired-skills/adquired-skills.component';
import { NextLvlComponent } from './area/next-lvl/next-lvl.component';
import { PlayerComponent } from './area/player/player.component';
import { LevelLineComponent } from './area/level-line/level-line.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AreaComponent,
    TitleComponent,
    AdquiredSkillsComponent,
    NextLvlComponent,
    PlayerComponent,
    LevelLineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
