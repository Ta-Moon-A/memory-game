"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var myHttpService_service_1 = require("./myHttpService.service");
var HttpSampleComponent = (function () {
    function HttpSampleComponent(_myHttpService) {
        this._myHttpService = _myHttpService;
    }
    HttpSampleComponent.prototype.onPost = function (title, body, userId) {
        var _this = this;
        this._myHttpService.createPost({ title: title, body: body, userId: +userId })
            .subscribe(function (response) { return _this.response = response; }, function (error) { return console.log(error); });
    };
    HttpSampleComponent.prototype.onGetPosts = function () {
        var _this = this;
        this._myHttpService.getPosts()
            .subscribe(function (response) { return _this.response = response; }, function (error) { return console.log(error); });
    };
    HttpSampleComponent = __decorate([
        core_1.Component({
            selector: "http-sample",
            template: "  \n                <div [ngClass]=\"{httpSample : true}\">\n                    <div>\n                        <label for=\"title\">Title</label>\n                        <input type=\"text\" id=\"title\" #title>\n                    </div>\n                    <div>\n                        <label for=\"body\">Body</label>\n                        <input type=\"text\" id=\"body\" #body>\n                    </div>\n                    <div>\n                        <label for=\"user-id\">User Id</label>\n                        <input type=\"text\" id=\"user-id\" #userId>\n                    </div><br>\n                    <button (click)=\"onPost(title.value,body.value,userId.value)\">Post Data</button>\n                    <button (click)=\"onGetPosts()\">Get All Posts</button><br><br>\n                   <p>Response : {{response | json}}</p>\n                </div>\n              ",
            providers: [myHttpService_service_1.MyHttpService]
        }), 
        __metadata('design:paramtypes', [myHttpService_service_1.MyHttpService])
    ], HttpSampleComponent);
    return HttpSampleComponent;
}());
exports.HttpSampleComponent = HttpSampleComponent;
//# sourceMappingURL=http-sample.component.js.map