import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServiceService} from '../../service/service.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: ServiceService) {

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

}
