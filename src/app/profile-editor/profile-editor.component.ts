import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator, notEqualsValidator } from '../validators';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''), 
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl('')
  //   })
  // });

  profileForm = this.formBuilder.group({
    firstName: ['', [
      Validators.required, 
      Validators.minLength(3), 
      forbiddenNameValidator(/thomas/i)]], 
    lastName: [''], 
    address: this.formBuilder.group({
      street: [''], 
      city: ['']
    }), 
    aliases: this.formBuilder.array([
      this.formBuilder.control('')
    ]),
  }, { validators: notEqualsValidator('firstName', 'lastName')});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }

  get aliases(): FormArray {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''))
  }

  onSubmit() {
    console.log('SUBMIT', this.profileForm.value);
  }



  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy', 
      address: {
        street: '123 Drew Street'
      }
    });
  }
}
