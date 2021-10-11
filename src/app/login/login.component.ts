import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor() { }
  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  ngOnInit(): void {
    // this.form.valueChanges.subscribe(data=>{
    //   console.log(data);
    // })
  }
  onSubmit() {
    console.log(this.form.value);

  }
}
