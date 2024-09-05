import { Component } from '@angular/core';
import { FooatearComponent } from "../../components/fooatear/fooatear.component";
import { RouterOutlet } from '@angular/router';
import { NavAuthComponent } from "../../components/nav-auth/nav-auth.component";

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [FooatearComponent, RouterOutlet, NavAuthComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

}
