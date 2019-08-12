import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './components/life-cycle-hook-functions/article/article.component';
import { ArticleListComponent } from './components/life-cycle-hook-functions/article-list/article-list.component';
import { PanelComponent } from './components/viewChildren-and-contentChildren/panel/panel.component';
import { PanelListComponent } from './components/viewChildren-and-contentChildren/panel-list/panel-list.component';
import { CarouselComponent } from './components/exercise01-carousel/carousel.component';
import { CarouselItemComponent } from './components/exercise01-carousel/carousel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleListComponent,
    PanelComponent,
    PanelListComponent,
    CarouselComponent,
    CarouselItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
