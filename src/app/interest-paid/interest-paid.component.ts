/*
============================================
; Title: Loan_App
; File Name: interest-paid.component.ts
; Author: Professor Krasso
; Date: 20 July 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
===========================================
*/


import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interest-paid',
  templateUrl: './interest-paid.component.html',
  styleUrls: ['./interest-paid.component.css']
})
export class InterestPaidComponent implements OnInit {

  @Input() interestPaidTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
