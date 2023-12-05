import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  userForm = {
    firstName: '',
    surname: '',
password: '',
confirmPassword: '',
    defUserName: '',
    
  };

  generi = [
    {
      label: 'Uomo',
      value: 'Uomo',
    },
    {
      label: 'Donna',
      value: 'Donna',
    }
  ]


  risposta = ''


  user: any = {
    firstName: '',
    surname: '',
    password: '',
    confirmPassword: '',
    username: '',
    risposta: '',
    genere: '',
  };
  constructor() { }


  @ViewChild('form', {static: true}) form!: NgForm

  ngOnInit(): void {
    this.form.statusChanges?.subscribe((status) => {
      console.log('Form Status:', status)
    })
  }
  generateUser() {
    this.form.form.patchValue({
      userInfo: {
        email: 'pippo@pippo.com',
        username: 'pippo',
      }
    })
  }

  submit() {
    console.log('Form sent:', this.form);
    this.user.username = this.form.value.userInfo.username
    this.user.email = this.form.value.userInfo.email
    this.user.secret = this.form.value.userInfo.secret
    this.user.risposta = this.form.value.userInfo.risposta
    this.user.genere = this.form.value.userInfo.genere
  }

}
