import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from '../../../shared/services/posts.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss'],
})
export class PostAddComponent implements OnInit {
  addForm!: FormGroup;
  submited!: boolean;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private postsService: PostsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  ////To Access Inputs

  get f() {
    return this.addForm.controls;
  }
  buildForm() {
    this.addForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
    });
  }
  onsubmit() {
    this.submited = true;
    //Stop Send
    if (this.addForm.invalid) {
      return;
    }
    this.postsService.addItem(this.addForm.value).subscribe(
      (res) => {
        if (res) {
          this.addForm.reset();
        }
        this.router.navigate(['../admin/posts-list']);
        this.toastr.success('Item ADDED', 'Successfully', {
          timeOut: 3000,
          closeButton: true,
          progressBar: true,
        });
      },
      (err) => {
        this.toastr.error(err.statusText, 'error', {
          timeOut: 3000,
          closeButton: true,
          progressBar: true,
        });
      }
    );
  }
}
