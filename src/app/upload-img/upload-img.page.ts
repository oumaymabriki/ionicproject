import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions, } from '@awesome-cordova-plugins/camera/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { ImagePicker, ImagePickerOptions } from '@awesome-cordova-plugins/image-picker/ngx';
import {Crop} from '@ionic-native/crop/ngx';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.page.html',
  styleUrls: ['./upload-img.page.scss'],
})
export class UploadImgPage implements OnInit {
  imageUrl: any;
  securePath: any= window;
  url: any;

  constructor(
    private actionsheet: ActionSheetController,
    private camera: Camera,
    private crop: Crop,
    private file: File,
    private imagepicker: ImagePicker,
    private domsanitize: DomSanitizer,
    ) { }

  ngOnInit() {
  }
  chooseFromCamera(sourceType){
    const options: CameraOptions= {
      quality: 100,
      mediaType: this.camera.MediaType.PICTURE,
      destinationType:this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      // eslint-disable-next-line object-shorthand
      sourceType: sourceType,
  };
  this.camera.getPicture(options).then((result)=>{
  console.log('Camera_URL', result);
  this.imageUrl= this.securePath.Ionic.WebView.convertFileSrc(result);
  }, error =>{
    console.log('error camera', error);
  });
  }

  santizeUrl(imageUrl){
    return this.domsanitize.bypassSecurityTrustUrl(imageUrl);
 }
 pickImageFromLibrary(){
 const options: ImagePickerOptions = {
   quality:100,
   maximumImagesCount:3,
 };
 this.imagepicker.getPictures(options).then ((imagresult)=>{
 console.log('result img picker', imagresult);
 // eslint-disable-next-line @typescript-eslint/prefer-for-of
 for(let i=0; i<imagresult.length; i++){
   this.url=this.securePath.Ionic.WebView.convertFileSrc(imagresult[i]);
 }
 }, error =>{
   console.log('image picker error', error);
 });
 };


  async selectimageOptions(){
    const sheet=await this.actionsheet.create({
      header: '',
      buttons:[
        {
          text:'Load from galllery',
          handler: ()=>{
            console.log('Image selected from gallery');
            this.pickImageFromLibrary();
          }
        },
        {
          text: 'Select Camera',
          handler: () =>{
            this.chooseFromCamera(this.camera.PictureSourceType.CAMERA);
            console.log('Camera selected');
          }
        },
        {
          text:'Cancel',
          role:'cancel',
        },
      ]
    });
    await sheet.present();
  }

}
