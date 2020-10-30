import { Colloqium } from './Colloqium';
import { Courses } from './Courses';
import { Lecturer } from './Lecturer';
import { StudentHasSubject } from './StudentHasSubject';
export class Subject {

  id: number;
  subjectName: string;
  shortName: string;
  ectsPoints: number;
  lecturerDTO?: Lecturer[];
  coursesDTO?: Courses[];
  colloqiums?: Colloqium[];
  studentHasSubjects?: StudentHasSubject[];



  constructor() { }
}