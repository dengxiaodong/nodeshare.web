/**
 * Created by xiadong.deng on 2017/1/4.
 */
import "./rxjs-extensions"

import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {HttpModule} from '@angular/http'

import {AppComponent} from './app.component'
import {MenuComponent} from './menu/menu.component'
import {MenuService} from './menu/menu.service'

@NgModule({
    imports:[
        BrowserModule,
        HttpModule
    ],
    declarations:[MenuComponent, AppComponent],
    providers:[MenuService],
    bootstrap:[AppComponent]
})
export class AppModule{}

