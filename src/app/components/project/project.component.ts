import { Component, Input } from '@angular/core';
import { IProject } from 'src/app/app-interfaces';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent {
  @Input() project: IProject = {} as IProject
}
