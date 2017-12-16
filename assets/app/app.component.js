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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.boards = [];
        this.creatingNewBoard = false;
        this.selectedBoardIndex = 0;
        this.creatingNewItem = false;
    }
    AppComponent.prototype.cancelBoardCreate = function () {
        this.newBoardName = "";
        this.creatingNewBoard = false;
    };
    AppComponent.prototype.onAddNewBoard = function () {
        this.newBoardName = "";
        this.creatingNewBoard = true;
    };
    AppComponent.prototype.confirmBoardCreate = function () {
        this.boards.push({
            title: this.newBoardName,
            items: []
        });
        this.selectedBoardIndex = this.boards.length - 1;
        console.log("selectedBoardIndex", this.selectedBoardIndex, this.boards);
        this.creatingNewBoard = false;
        this.newBoardName = "";
    };
    AppComponent.prototype.onAddNewItem = function () {
        this.newItemName = "";
        this.creatingNewItem = true;
    };
    AppComponent.prototype.cancelItemCreate = function () {
        this.newItemName = "";
        this.creatingNewItem = false;
    };
    AppComponent.prototype.confirmItemCreate = function () {
        this.boards[this.selectedBoardIndex].items.push({
            body: this.newItemName,
            toDos: []
        });
        this.newItemName = "";
        this.creatingNewItem = false;
    };
    AppComponent.prototype.deleteItem = function (index) {
        this.boards[this.selectedBoardIndex].items.splice(index, 1);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            templateUrl: 'app.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map