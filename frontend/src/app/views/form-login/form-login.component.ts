import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {

  login = this.fb.group ({
  nomeUsuario: ['', Validators.required],
  senha: ['', Validators.required],
  })
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.login.value);
  }

  constructor(private fb:FormBuilder) { }
}
