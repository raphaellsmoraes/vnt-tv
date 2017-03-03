/**
 * Model that represents a
/**
 * Model that represents Projects
 */
import { Project } from './project.model';
export class Projects {
  name: string;
  projects: Array<Project>;

  constructor(name: string, projects: Array<Project>) {
    this.name = name;
    this.projects = projects;
  }
}
