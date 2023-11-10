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
      name: 'Pokedex',
      imageSrc: 'pokedex',
      techs: [
        { name: 'AngularJs' },
        { name: 'Typescript' },
        { name: 'RxJs' },
        { name: 'API' },
      ],
      githubUrl: 'https://github.com/Hyaguinhogp/Pokedex',
      demoUrl: 'https://pokedex-theta-seven-55.vercel.app/'
    },
    {
      name: 'NuKenzie',
      imageSrc: 'nukenzie',
      techs: [
        { name: 'ReactJs' },
        { name: 'Styled Components' },
        { name: 'Typescript' },
        { name: 'Django' },
      ],
      githubUrl: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-Hyaguinhogp',
      demoUrl: 'https://react-entrega-s1-nu-kenzie-hyaguinhogp.vercel.app/'
    },
    {
      name: 'Cola&Bora',
      imageSrc: 'colabora',
      techs: [
        { name: 'Python' },
        { name: 'Django' },
        { name: 'ORM' },
        { name: 'PostgreSQL' },
      ],
      githubUrl: 'https://github.com/Projeto-Cola-e-Bora/python-projeto-cola-e-bora',
      demoUrl: 'https://hackmd.io/rYFVo5VmQHSGejR9qpxMlA'
    },

  ]
}
