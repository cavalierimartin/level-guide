import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniverseComponent } from './universe/universe.component';
import { TitleComponent } from './universe/title/title.component';
import { AdquiredSkillsComponent } from './universe/adquired-skills/adquired-skills.component';
import { NextLvlComponent } from './universe/next-lvl/next-lvl.component';
import { PlayerComponent } from './universe/player/player.component';
import { LevelLineComponent } from './universe/level-line/level-line.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UniverseComponent,
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
