import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SelectFavComponent } from "./select-fav/select-fav.component";
import { CancelbookingComponent } from "./cancelbooking/cancelbooking.component";
import { CancelmatchComponent } from "./cancelmatch/cancelmatch.component";
import { AddReviewComponent } from "./add-review/add-review.component";
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera} from '@ionic-native/camera/ngx';
import {HttpModule} from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { AlertController } from '@ionic/angular';
@NgModule({
  declarations: [AppComponent , SelectFavComponent , CancelbookingComponent , CancelmatchComponent, AddReviewComponent],
  entryComponents: [SelectFavComponent , CancelbookingComponent , CancelmatchComponent, AddReviewComponent],
  imports: [
  Ng4GeoautocompleteModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,  
  ],
  providers: [   
    StatusBar,
    HttpClient,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FileTransfer,
    FileTransferObject,
    File,
    FilePath,
    Camera,
    FCM,
    Geolocation,
    InAppBrowser,
    AlertController
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
