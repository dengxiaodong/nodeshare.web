import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/observable'
import {Menu} from "./menu";

@Injectable()
export class MenuService{

    constructor(private http:Http){}

    getAllMenu(): Observable<Menu[]> {
        //TODO
        return this.http.get('/api/menu').map((r: Response) => r.json().data as Menu[]);
    }

}
