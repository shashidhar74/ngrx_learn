import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannel, decrement, increment, reset } from 'src/app/shrared/store/counter.action';
import { counterModel } from 'src/app/shrared/store/counter.model';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css']
})
export class CounterbuttonComponent {
  constructor(private store:Store<{counter:counterModel}>){}
  onIncrement(){
    this.store.dispatch(increment())
  }
  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
    this.store.dispatch(reset())
  }
  onRename(){
    this.store.dispatch(changeChannel({
      channel: 'welcome shashi'
    
    }))
  }
}
