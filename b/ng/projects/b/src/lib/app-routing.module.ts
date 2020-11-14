import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BclasssTableComponent } from './bclasss-table/bclasss-table.component'
import { BclassAdderComponent } from './bclass-adder/bclass-adder.component'
import { BclassDetailComponent } from './bclass-detail/bclass-detail.component'
import { BclassPresentationComponent } from './bclass-presentation/bclass-presentation.component'

const routes: Routes = [
	{ path: 'bclasss', component: BclasssTableComponent, outlet: 'table' },
	{ path: 'bclass-adder', component: BclassAdderComponent, outlet: 'editor' },
	{ path: 'bclass-detail/:id', component: BclassDetailComponent, outlet: 'editor' },
	{ path: 'bclass-presentation/:id', component: BclassPresentationComponent, outlet: 'presentation' },
	{ path: 'bclass-presentation-special/:id', component: BclassPresentationComponent, outlet: 'bclasspres' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
