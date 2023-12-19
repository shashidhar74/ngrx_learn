import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel } from 'src/app/shrared/store/Blog/blog.model';
import { getblog } from 'src/app/shrared/store/Blog/blog.selector';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  constructor(private store:Store<{blog:BlogModel[]}>){}

  bloglist!:BlogModel[]
  ngOnInit(): void {
   this.store.select(getblog).subscribe(item=>{
    this.bloglist=item;
    console.log(this.bloglist);
    
   })

  }

}
