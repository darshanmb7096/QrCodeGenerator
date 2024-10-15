import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BatchFormComponent } from "./batch-form/batch-form.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BatchFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'qr-code-generator';
}
