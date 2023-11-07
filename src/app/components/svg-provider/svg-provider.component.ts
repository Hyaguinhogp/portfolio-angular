import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-provider',
  templateUrl: './svg-provider.component.html',
  styleUrls: ['./svg-provider.component.sass']
})
export class SvgProviderComponent {
  @Input() svgPath: string = '';
  public svgContent: SafeHtml = {} as SafeHtml;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if(this.svgPath) {
      this.http.get('../../../assets/' + this.svgPath + '.svg', { responseType: 'text' })
        .subscribe(data => {
          this.svgContent = this.sanitizer.bypassSecurityTrustHtml(data);
        })
    }
  }

}
