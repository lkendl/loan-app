/*
============================================
; Title: Loan_App
; File Name: monthly-payment.component.ts
; Author: Professor Krasso
; Date: 20 July 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
===========================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-monthly-payment',
  templateUrl: './monthly-payment.component.html',
  styleUrls: ['./monthly-payment.component.css']
})
export class MonthlyPaymentComponent implements OnInit {

  @Input() monthlyPaymentTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
