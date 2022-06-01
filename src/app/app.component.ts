import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  testFG: FormGroup

  constructor(){
    this.testFG = new FormGroup({
      'name' : new FormControl('', Validators.required),
      'documentNumber' : new FormControl('', Validators.required),
      'dosageNumber' : new FormControl('', Validators.required)
    })
  }
}
