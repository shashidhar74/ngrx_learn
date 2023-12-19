import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { counterModel } from 'src/app/shrared/store/counter.model';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent implements OnInit ,OnDestroy{
  counterdisplay!: number;
channelname='';
counterSubscription!:Subscription
counter$!:Observable<counterModel>
  constructor(private store:Store<{counter:counterModel}>){}
  ngOnDestroy(): void {
    // if(this.counterSubscription){
    //   this.counterSubscription.unsubscribe()
    // }
  }
  ngOnInit(): void {
  //  this.counterSubscription=this.store.select('counter').subscribe(data=>{
  //   this.counterdisplay=data.counter
  //   this.channelname=data.channelname
  //  })
   this.counter$=this.store.select('counter')
  }

 
}
