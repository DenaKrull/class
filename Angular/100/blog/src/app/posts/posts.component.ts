import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from '../shared/blog.service';
import Posts from '../shared/Posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts!: Observable<Posts[]>;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '0';
    this.posts= this.blogService.getPosts(id)
    
  }

}
