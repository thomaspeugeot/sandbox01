import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

import { BclassDB } from '../bclass-db'
import { BclassService } from '../bclass.service'


@Component({
  selector: 'app-bclass-adder',
  templateUrl: './bclass-adder.component.html',
  styleUrls: ['./bclass-adder.component.css']
})
export class BclassAdderComponent implements OnInit {

	bclass = {} as BclassDB;






  constructor(
    private bclassService: BclassService, 
	  ) {
  }

  ngOnInit(): void {

  }


  add(): void {



    this.bclassService.postBclass( this.bclass )
    .subscribe(bclass => {
		this.bclassService.BclassServiceChanged.next("post")
		
		this.bclass = {} // reset fields
	    console.log("bclass added")
    });
  }
}
