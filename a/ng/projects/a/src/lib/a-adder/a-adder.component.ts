import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

import { ADB } from '../a-db'
import { AService } from '../a.service'


@Component({
  selector: 'app-a-adder',
  templateUrl: './a-adder.component.html',
  styleUrls: ['./a-adder.component.css']
})
export class AAdderComponent implements OnInit {

	a = {} as ADB;






  constructor(
    private aService: AService, 
	  ) {
  }

  ngOnInit(): void {

  }


  add(): void {



    this.aService.postA( this.a )
    .subscribe(a => {
		this.aService.AServiceChanged.next("post")
		
		this.a = {} // reset fields
	    console.log("a added")
    });
  }
}
