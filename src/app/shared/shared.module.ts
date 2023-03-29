import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    LoaderComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    ProfileComponent
  ]
})
export class SharedModule { }
