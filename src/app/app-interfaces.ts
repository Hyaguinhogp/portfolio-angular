export interface IStack {
	name: string
	icon: string
}

export interface IProject {
	name: string
	imageSrc: string
	techs: ITech[]
	githubUrl: string
	demoUrl: string
}

interface ITech {
	name: string
}