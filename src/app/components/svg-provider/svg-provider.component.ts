import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-svg-provider',
  templateUrl: './svg-provider.component.html',
  styleUrls: ['./svg-provider.component.sass']
})
export class SvgProviderComponent {
  @HostBinding('style.-webkit-mask-image')
  private _path!: string;

  @Input()
  public set path(filePath: string) {
    this._path = `url("${filePath}")`;
  }
}
