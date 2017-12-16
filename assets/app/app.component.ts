import {Component} from '@angular/core';
//import * as _ from 'lodash';

interface Items {
    body : string;
    toDos : IToDo[];
}
interface IToDo {
    title : string;
    isDone : boolean;
}
interface IBoards {
    title: string;
    items : Items[];
}
@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html'
})
export class AppComponent { 
    constructor() {}
    
    private boards : IBoards[] = [];
    
    private creatingNewBoard : boolean = false;
    private newBoardName : string;
    private selectedBoardIndex : number = 0;
    
    private creatingNewItem : boolean = false;
    private newItemName : string;
    
    private cancelBoardCreate() : void {
        this.newBoardName = "";
        this.creatingNewBoard = false;
    } 
    
    private onAddNewBoard() : void {
        this.newBoardName = "";
        this.creatingNewBoard = true;
    }
    
    private confirmBoardCreate() : void {
        this.boards.push({
            title:this.newBoardName,
            items:[]
        })
        this.selectedBoardIndex = this.boards.length-1;
        console.log("selectedBoardIndex", this.selectedBoardIndex, this.boards)
        this.creatingNewBoard = false;
        this.newBoardName = "";
    }
    
    private onAddNewItem() : void {
        this.newItemName = "";
        this.creatingNewItem = true;
    }
    
    private cancelItemCreate() : void {
        this.newItemName = "";
        this.creatingNewItem = false;
    }
    
    private confirmItemCreate() : void {
        this.boards[this.selectedBoardIndex].items.push({
            body: this.newItemName,
            toDos: []
        })
        this.newItemName = "";
        this.creatingNewItem = false;
    }
    
    private deleteItem(index : number) : void {
        this.boards[this.selectedBoardIndex].items.splice(index, 1)
    }
}