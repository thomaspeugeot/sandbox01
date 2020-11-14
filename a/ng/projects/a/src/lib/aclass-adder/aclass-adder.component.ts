import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

import { AclassDB } from '../aclass-db'
import { AclassService } from '../aclass.service'


@Component({
  selector: 'app-aclass-adder',
  templateUrl: './aclass-adder.component.html',
  styleUrls: ['./aclass-adder.component.css']
})
export class AclassAdderComponent implements OnInit {

	aclass = {} as AclassDB;






  constructor(
    private aclassService: AclassService, 
	  ) {
  }

  ngOnInit(): void {

  }


  add(): void {



    this.aclassService.postAclass( this.aclass )
    .subscribe(aclass => {
		this.aclassService.AclassServiceChanged.next("post")
		
		this.aclass = {} // reset fields
	    console.log("aclass added")
    });
  }
}
