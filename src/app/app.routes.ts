import { RouterModule, Routes } from '@angular/router';
import { BatchFormComponent } from './batch-form/batch-form.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'batch', component: BatchFormComponent },
    { path: '', redirectTo: 'batch', pathMatch: 'full' },
    { path: '**', redirectTo: 'batch' } // Add a wildcard route for any other unknown routes
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }