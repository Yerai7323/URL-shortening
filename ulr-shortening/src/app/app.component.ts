import { Component } from '@angular/core';
import { Response } from './models/response.model';
import { UrlApiService } from './shared/services/url-api/url-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public urlShorted = false;
  public urlBase = '';
  public urlResponse: Response | undefined;

  
  constructor(private urlApiService: UrlApiService) {

  }

  getUrl(url: string): void {
    console.log(url);
    this.urlBase = url;
    this.urlApiService.getShorten(this.urlBase).subscribe(
      (response: Response) => {
        this.urlResponse = response;
        console.log(this.urlResponse);
        console.log(this.urlResponse.result.full_short_link);

      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
