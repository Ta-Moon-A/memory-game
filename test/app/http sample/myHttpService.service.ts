import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/observable";
import "rxjs/Rx";
import {Headers} from "@angular/http";

@Injectable()
export class MyHttpService {

    constructor(private _http: Http) { }

    getPosts(): Observable<any> {
        return this._http.get('http://jsonplaceholder.typicode.com/posts').map(res => res.json());

    }

    createPost(post: { title: string, body: string, userId: number }): Observable<any> {
        const body = JSON.stringify(post);
        let header = new (Headers);

        header.append('Content-Type', 'application/x-www-urlencoded');

        return this._http.post('http://jsonplaceholder.typicode.com/posts', body, {
            headers: header
        }).map(res => res.json());

    }
}