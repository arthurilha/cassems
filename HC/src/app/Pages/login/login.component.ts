import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    cpf: new FormControl(null, [Validators.required,]),
    senha: new FormControl(null, [Validators.required,]),
  });
  constructor() { }

  ngOnInit(): void {
  }



}
