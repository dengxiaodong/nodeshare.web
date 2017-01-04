import {Component, OnInit} from '@angular/core'
import {Menu} from './menu'
import {MenuService} from "./menu.service";
import {Observable} from "rxjs";
@Component({
    selector: 'main-nav',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    menus: Observable<Menu[]>;

    constructor(private menuService: MenuService) {
    }

    ngOnInit(): void {
        this.menus = this.menuService.getAllMenu();
    }

}
