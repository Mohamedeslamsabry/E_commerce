import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooatearComponent } from "../fooatear/fooatear.component";

@Component({
  selector: 'app-nav-auth',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-auth.component.html',
  styleUrl: './nav-auth.component.scss'
})
export class NavAuthComponent {

}
