import { Menu } from '@interfaces/menus/menus';
import { menu } from '../const-data/menu';
import { MenusResponse } from '@model/menus/menus-response';
import { MenusMapper } from '@mapper/menus/menus-mapper';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

type BaseResponse = {
    [key: string]: unknown;
};

@Injectable()
export class MenuService{

    private httpClient = inject(HttpClient);
    private allMenusSubject: BehaviorSubject<Menu[]> = new BehaviorSubject<Menu[]>([]);
    allMenus$: Observable<Menu[]> = this.allMenusSubject.asObservable();

    apiUrl = environment.apiUrl;

    getMenus(): Menu[]{
        const menusResponse = menu.map((menu) => new MenusResponse(menu));
        const menuMapper = menusResponse.map((menu) => MenusMapper.map(menu));
        return menuMapper;
    }

    getAllMenus(): Observable<Menu[]> {

        return this.httpClient.get<BaseResponse[]>(this.apiUrl + '/menu')
            .pipe(
                map((response: BaseResponse[]) => response.map((menu) => new MenusResponse(menu))),
                map((response: MenusResponse[]) => response.map((menu) => MenusMapper.map(menu))),
                map((response) => response.map((menu) => ({ ...menu, name: menu.dishDescription }))),
                tap((response) => this.allMenusSubject.next(response))
            );
    }

    postNewMenu(bodyRequest: Menu): Observable<boolean> {
        return this.httpClient.post(this.apiUrl + '/menu', MenusMapper.toJson(bodyRequest))
            .pipe(
                tap((response) => console.log(response)),
                map(() => {
                    this.getAllMenus().subscribe();
                    return true;
                })
            );
    }

}