import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.html'
})
export class BlogDetail {

  blogId: any;

  constructor(private route: ActivatedRoute) {
    this.blogId = this.route.snapshot.params['id'];
  }
}