import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../shared/services/posts.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  post: any = [];
  constructor(
    private postsService: PostsService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  //Get All Post
  getAll() {
    this.postsService.getAll().subscribe((res) => {
      // console.log(res);
      this.post = res;
    });
  }

  //Delete Post
  deletePost(model: any, id: any) {
    this.modalService.open(model).result.then(
      (res) => {
        this.postsService.deleteItem(id).subscribe(
          (res) => {
            this.toastr.success('Item Deleted', 'Successfully', {
              timeOut: 3000,
              closeButton: true,
              progressBar: true,
            });
            this.getAll();
          },
          (err) => {
            this.toastr.error(err.statusText, 'error', {
              timeOut: 3000,
              closeButton: true,
              progressBar: true,
            });
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
