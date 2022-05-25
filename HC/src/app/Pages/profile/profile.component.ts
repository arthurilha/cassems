import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  form = new FormGroup({
    nome: new FormControl({value: '', disabled: true}),
    endereco: new FormControl({value: '', disabled: true}),
    dataNascimento: new FormControl({value: '', disabled: true}),
    email: new FormControl({value: '', disabled: true}),
    telefone: new FormControl(null, [Validators.required]),
  });
  constructor() { }

  ngOnInit(): void {
  }
  postContact(){
    
  }

}
