  import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NotiService } from '../services/noti/noti.service';
import {ApiService } from '../services/api/api.service';
import { Router } from '@angular/router';
import {Events } from '@ionic/angular';
import { FCM } from '@ionic-native/fcm/ngx';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public login: FormGroup;
  public is_submit:any=false;
  public notmatch:any=false;
  public response:any;
  token:any;
  constructor(
      public formBuilder: FormBuilder,
      public noti:NotiService,
      public api:ApiService,
      public router: Router,
      private events:Events,
      private fcm: FCM,
      public alertController: AlertController
       ) {     
      this.fcm.getToken().then(token => {
              this.token= token;
              });
    this.makeform(); 
   }
      makeform(){
        this.login = this.formBuilder.group({
          fname: ['', Validators.compose([Validators.required])],      
          lname: ['', Validators.compose([Validators.required])],
          pnumber: ['', Validators.compose([Validators.required])],      
          email: ['', Validators.compose([Validators.required,Validators.email])],
          password: ['', Validators.compose([Validators.required,Validators.minLength(6)])],      
          cpassword: ['', Validators.compose([Validators.required])],
          agree: [null, Validators.compose([Validators.required])]

      });
      }
        ngOnInit() {
        }

        justlogin(){          
          this.is_submit=true;
          if(this.login.valid){
            if(this.login.value.password==this.login.value.cpassword){
              this.noti.presentLoading();
              var data={
                      fname:this.login.value.fname,
                      lname:this.login.value.lname,
                      pnumber:this.login.value.pnumber,
                      email:this.login.value.email,
                      password:this.login.value.password,
                      cpassword:this.login.value.cpassword,
                      agree:this.login.value.agree,
                      uid:this.token,
              }
               this.api.post('signup',data,'').subscribe(res => {
                this.noti.stopLoading();
                this.response=res;
                 if(this.response.status==1){
                  this.presentAlert();
                  this.router.navigate(['/login']);
                 }else{
                  this.noti.presentToast(this.response.msg,'danger');
                 }
               console.log(res);
              },err => {
                this.noti.stopLoading();
                this.noti.presentToast('Internal Server Error, Try again','danger');
            }
              )
            }else{
              this.notmatch = true;
            }
           
          }
       
         
        }  
        
        async presentAlert() {
          const alert = await this.alertController.create({
            header: 'Success',
            subHeader: 'Confirmation link sent',
            message: 'A link is sent to your email account, Please confirm your email account.',
            buttons: ['OK'],
            mode:"ios"
          });
        
          await alert.present();
        }

}
