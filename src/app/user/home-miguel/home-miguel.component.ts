import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home-miguel',
  templateUrl: './home-miguel.component.html',
  styleUrls: ['./home-miguel.component.css']
})
export class HomeMiguelComponent {
  public qrCodeContent: string = "";
  public qrCodeDownloadLink: SafeUrl = "";

  constructor () {
    this.qrCodeContent = 'correoDeEejemplo@gmail.com';
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }


}
