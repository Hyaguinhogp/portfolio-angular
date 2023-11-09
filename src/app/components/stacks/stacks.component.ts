import { Component } from '@angular/core';
import { IStack } from 'src/app/app-interfaces';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.sass']
})
export class StacksComponent {
  stacks: IStack[] = [
    { name: 'HTML', icon: 'html'},
    { name: 'CSS', icon: 'css'},
    { name: 'JavaScript', icon: 'javascript'},
    { name: 'TypesCript', icon: 'typescript'},
    { name: 'Python', icon: 'python'},
    { name: 'NodeJs', icon: 'nodejs'},
    { name: 'ReactJs', icon: 'reactjs'},
    { name: 'AngularJs', icon: 'angularjs'},
    { name: 'Django', icon: 'django'},
    { name: 'Docker', icon: 'docker'},
    { name: 'Git', icon: 'git'},
    { name: 'PostgreSQL', icon: 'postgresql'},
  ]
}
