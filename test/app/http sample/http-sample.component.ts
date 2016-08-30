import {Component} from "@angular/core";
import {MyHttpService} from "./myHttpService.service";

@Component({
    selector: "http-sample",
    template: `  
                <div [ngClass]="{httpSample : true}">
                    <div>
                        <label for="title">Title</label>
                        <input type="text" id="title" #title>
                    </div>
                    <div>
                        <label for="body">Body</label>
                        <input type="text" id="body" #body>
                    </div>
                    <div>
                        <label for="user-id">User Id</label>
                        <input type="text" id="user-id" #userId>
                    </div><br>
                    <button (click)="onPost(title.value,body.value,userId.value)">Post Data</button>
                    <button (click)="onGetPosts()">Get All Posts</button><br><br>
                   <p>Response : {{response | json}}</p>
                </div>
              `,
    providers: [MyHttpService]
})

export class HttpSampleComponent {
    response: string;

    constructor(private _myHttpService: MyHttpService) { }

    onPost(title: string, body: string, userId: string) {
        this._myHttpService.createPost({ title: title, body: body, userId: +userId })
            .subscribe(
            response => this.response = response,
            error => console.log(error)
            );

    }

    onGetPosts() {
        this._myHttpService.getPosts()
            .subscribe(
            response => this.response = response,
            error => console.log(error)
            );
    }
}
