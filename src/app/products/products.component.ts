import { Component, OnInit,ViewChild,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService  } from "../_services/authentication.service";
import { UserService } from "../_services/user.service";
import { AlertService} from '../_services/alert.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    public dialogRef: MatDialogRef<ProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }
  addProductForm: FormGroup;save
 

  ngOnInit() {
    
    this.addProductForm = this.formBuilder.group({
      productName: ['', Validators.required],
      categoryId: ['', Validators.required],
      categoryName: ['', Validators.required],
      unitprice: ['', Validators.required],
      status: ['',Validators.required]

     /*  unitprice: ['', [Validators.required, Validators.minLength(6)]] */
  });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  /* onSubmit(form){
    this.dialogRef.close(this.addProductForm.value);
  }
 */
  saveProduct(){
    this.dialogRef.close(this.addProductForm.value);
  }


}
