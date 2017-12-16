import {Component} from '@angular/core';
//import * as _ from 'lodash';

interface Items {
    body : string;
}
@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html'
})
export class AppComponent { 
    constructor() {}
    
    private items : Items[] = [
        {body:"A thing I need to do"}
        ];
        
    private randomTemp : number[] = [1];
        
    private onAddNewItem() : void {
        this.items.push({
            body: `Random number which is ${this.getRandomNumber()[0]}`
        })
    }
    
    private getRandomNumber() : number {
        this.randomTemp.push(100 + Math.floor(Math.random() * 100));
        return this.randomTemp;
    }
    
    private onCloseItem(i : number) : void {
        this.items.splice(i,1)
    }
}
