import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { SystemPath } from 'src/app/@shared/const/path-url/_systemPath.modal'

@Component({
  selector: 'mango-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty()
      this.validateForm.controls[i].updateValueAndValidity()
    }

    if (!this.validateForm.invalid) {
      this.router.navigate([SystemPath.sys_fromWork])
    }
  }

  constructor(private fb: FormBuilder, private router: Router) {
    this.validateForm = this.fb.group({
      userName: ['13888888880', [Validators.required]],
      password: ['123456', [Validators.required]],
      remember: [true],
    })
  }

  ngOnInit(): void {}
}
