import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from 'src/app/shrared/store/counter.action';
import { counterModel } from 'src/app/shrared/store/counter.model';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.css']
})
export class CustomcounterComponent {
actiontype: any;
constructor(private store:Store<{counter:counterModel}>){}
counterInput!:number;
  onIncrement(){
this.store.dispatch(customIncrement({value:+this.counterInput,action:this.actiontype}));
  }
}
