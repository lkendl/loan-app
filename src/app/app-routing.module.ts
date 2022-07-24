/*
============================================
; Title: Loan_App
; File Name: app-routing.module.ts
; Author: Professor Krasso
; Date: 20 July 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
===========================================
*/


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';

const routes: Routes = [
{
  path: '',
  component: BaseLayoutComponent,
  children: [
    {
      path: '', // Anyone that follows the BaseLayoutComponent, they will be using the BaseLayout in all of the child components of that Base component.
      component: HomeComponent
    },
    {
      path: 'about', // Anyone that follows the BaseLayoutComponent, they will be using the BaseLayout in all of the child components of that Base component.
      component: AboutComponent
    },
    {
      path: 'contact', // Anyone that follows the BaseLayoutComponent, they will be using the BaseLayout in all of the child components of that Base component.
      component: ContactComponent
    }
  ],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
