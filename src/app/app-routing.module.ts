import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './shared/components/layouts/layouts/blank-layout/blank-layout.component';
import { UserLayoutComponent } from './shared/components/layouts/layouts/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'posts-list',
        loadChildren: () =>
          import('./views/posts/posts.module').then((m) => m.PostsModule),
      },
    ],
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      {
        path: 'notes-list',
        loadChildren: () =>
          import('./views/notes/notes.module').then((m) => m.NotesModule),
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
