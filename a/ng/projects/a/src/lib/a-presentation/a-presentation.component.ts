import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

import { ADB } from '../a-db'
import { AService } from '../a.service'


import { Router, RouterState, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-a-presentation',
	templateUrl: './a-presentation.component.html',
	styleUrls: ['./a-presentation.component.css']
})
export class APresentationComponent implements OnInit {

	a: ADB;




	constructor(
		private aService: AService,

		private route: ActivatedRoute,
		private router: Router,
	) {
			this.router.routeReuseStrategy.shouldReuseRoute = function () {
				return false;
			};
	}

	ngOnInit(): void {
		this.getA();


		// observable for changes in 
		this.aService.AServiceChanged.subscribe(
			message => {
				if (message == "update") {
					this.getA()
					
				}
			}
		)
	}

  getA(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.aService.getA(id)
		.subscribe( 
			a => 
			{ 
					this.a = a
        	}
  	);
  }



	// set presentation outlet
	setPresentationRouterOutlet(structName :string, ID: number) {
		this.router.navigate([{
	  	outlets: {
			presentation: [structName + "-presentation", ID]
	  	}
		}]);
	}

	// set editor outlet
	setEditorRouterOutlet(ID: number) {
		this.router.navigate([{
	 		outlets: {
	   			editor: ["a-detail", ID]
	 	}
   	}]);
 }

}
