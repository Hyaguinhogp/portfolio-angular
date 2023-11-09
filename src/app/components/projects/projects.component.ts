import { Component } from '@angular/core';
import { IProject } from 'src/app/app-interfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent {
  projects: IProject[] = [
    {
      name: 'NuKenzie',
      techs: [
        { name: 'ReactJs' },
        { name: 'Styled Components' },
        { name: 'Typescript' },
        { name: 'Django' },
      ],
      githubUrl: 'url',
      demoUrl: 'url'
    },
    {
      name: 'NuKenzie',
      techs: [
        { name: 'ReactJs' },
        { name: 'Styled Components' },
        { name: 'Typescript' },
        { name: 'Django' },
      ],
      githubUrl: 'url',
      demoUrl: 'url'
    },
    {
      name: 'NuKenzie',
      techs: [
        { name: 'ReactJs' },
        { name: 'Styled Components' },
        { name: 'Typescript' },
        { name: 'Django' },
      ],
      githubUrl: 'url',
      demoUrl: 'url'
    },
  ]
}
