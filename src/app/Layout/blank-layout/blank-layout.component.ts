import { Component } from '@angular/core';
import { NavBlankComponent } from "../../components/nav-blank/nav-blank.component";
import { FooatearComponent } from "../../components/fooatear/fooatear.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [NavBlankComponent, FooatearComponent,RouterOutlet],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss'
})
export class BlankLayoutComponent {

}
