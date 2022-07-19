/*
============================================
; Title: Loan_App
; File Name: app-routing.module.ts
; Author: Professor Krasso
; Date: 16 July 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
; ===========================================
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: CalculatorComponent
  },
  {
    path: 'home',
    component: CalculatorComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
