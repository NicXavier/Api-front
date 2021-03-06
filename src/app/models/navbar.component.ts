import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserDTO } from '../models/UserDTO';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name = environment.name
  id = environment.idClient

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/home'])
    environment.idClient = 0    
    environment.name = ''
    environment.type_user = ''
    environment.token = ''    
  }

}
