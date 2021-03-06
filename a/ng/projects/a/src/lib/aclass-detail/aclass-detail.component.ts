// generated by genNgDetail.go
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

import { AclassDB } from '../aclass-db'
import { AclassService } from '../aclass.service'



import { Router, RouterState, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aclass-detail',
  templateUrl: './aclass-detail.component.html',
  styleUrls: ['./aclass-detail.component.css']
})
export class AclassDetailComponent implements OnInit {

	// the AclassDB of interest
	aclass: AclassDB;

	constructor(
		private aclassService: AclassService,

		private route: ActivatedRoute,
		private router: Router,
	) {
		// https://stackoverflow.com/questions/54627478/angular-7-routing-to-same-component-but-different-param-not-working
		// this is for routerLink on same component when only queryParameter changes
		this.router.routeReuseStrategy.shouldReuseRoute = function () {
		return false;
		};
  }

  ngOnInit(): void {
	this.getAclass();

  }

  getAclass(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.aclassService.getAclass(id)
		.subscribe( 
			aclass => 
			{ 
					this.aclass = aclass

        }
  	);
  }


  save(): void {
	const id = +this.route.snapshot.paramMap.get('id');




	this.aclassService.updateAclass( this.aclass )
    .subscribe(aclass => {
		this.aclassService.AclassServiceChanged.next("update")

    	console.log("aclass saved")
    });
  }
}
