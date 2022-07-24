/*
============================================
; Title: Loan_App
; File Name: home.component.ts
; Author: Professor Krasso
; Date: 20 July 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build an Angular application.
===========================================
*/

import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {

  loanAmount: number;
  interestRate: number;
  numberOfYears: number;
  interestPaidTotal: number = 0;
  monthlyPaymentTotal: number = 0;
  calculatorForm: FormGroup;
  monthlyPayment: number;


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.calculatorForm = this.fb.group({
      loanAmount: ['', Validators.required],
      interestRate: ['', Validators.required],
      numberOfYears: ['', Validators.required]

    })
  }

// Add a get() function that returns the transcriptForm controls.
get form() { return this.calculatorForm.controls; }

calculatePayment() {

// Monthly payment formula.
// Input: Loan = 5316 Interest Rate= 5.74 Number of Years = 4
// Expected Output: Monthly = $124.21 Interest Paid = $646.08
this.monthlyPayment = (this.form.loanAmount.value * (((this.form.interestRate.value/100)/12) * Math.pow((((this.form.interestRate.value/100)/12) +1), (this.form.numberOfYears.value*12))) / (Math.pow((1 + ((this.form.interestRate.value/100)/12)), (this.form.numberOfYears.value*12)) -1));

// Round monthlyPaymentTotal to two decimal places.
this.monthlyPaymentTotal = parseFloat(this.monthlyPayment.toFixed(2));

// Interest paid formula.
this.interestPaidTotal = (this.monthlyPaymentTotal * this.form.numberOfYears.value*12) - this.form.loanAmount.value;

  }

}

