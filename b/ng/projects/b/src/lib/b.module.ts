import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// for angular material
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatTableModule } from '@angular/material/table'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatExpansionModule } from '@angular/material/expansion'; 

import { AngularSplitModule, SplitComponent } from 'angular-split';

import { AppRoutingModule } from './app-routing.module';

import { SplitterComponent} from './splitter/splitter.component'
import { SidebarComponent } from './sidebar/sidebar.component';


import { BclasssTableComponent } from './bclasss-table/bclasss-table.component'
import { BclassAdderComponent } from './bclass-adder/bclass-adder.component'
import { BclassDetailComponent } from './bclass-detail/bclass-detail.component'
import { BclassPresentationComponent } from './bclass-presentation/bclass-presentation.component'


@NgModule({
  declarations: [


	BclasssTableComponent,
	BclassAdderComponent,
	BclassDetailComponent,
	BclassPresentationComponent,


	SplitterComponent,
	SidebarComponent
  ],
  imports: [
	FormsModule,
	ReactiveFormsModule,
    CommonModule,
    RouterModule,

    AppRoutingModule,

    MatSliderModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
	MatToolbarModule,
	MatExpansionModule,
	MatListModule,

    AngularSplitModule,
  ],
  exports: [  
	  
	
	BclasssTableComponent,
	BclassAdderComponent,
	BclassDetailComponent,
	BclassPresentationComponent,


  	SplitterComponent,
  	SidebarComponent,

  ]
})
export class BModule { }
