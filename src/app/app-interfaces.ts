export interface IStack {
	name: string
	icon: string
}

export interface IProject {
	name: string
	techs: ITech[]
	githubUrl: string
	demoUrl: string
}

interface ITech {
	name: string
}