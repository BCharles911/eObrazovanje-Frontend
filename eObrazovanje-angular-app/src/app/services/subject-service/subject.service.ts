import { StudentHasSubject } from "./../../classes/StudentHasSubject";
import { Lecturer } from "./../../classes/Lecturer";
import { Colloqium } from "./../../classes/Colloqium";
import { Courses } from "./../../classes/Courses";
import {
  SortColumn,
  SortDirection,
} from "./../../directives/sortable.directive";
import { Subject } from "./../../classes/Subject";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, PipeTransform, OnInit } from "@angular/core";
import { BehaviorSubject, Subject as _Subject, Observable, of } from "rxjs";
import { DecimalPipe } from "@angular/common";
import { tap, debounceTime, switchMap, delay } from "rxjs/operators";
import { Student } from "src/app/classes/Student";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

const SUBJECTURL = "http://localhost:8080/api/subject/";

@Injectable({
  providedIn: "root",
})
export class SubjectService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new _Subject<void>();
  private _subjects$ = new BehaviorSubject<Subject[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  private subjectsList: Subject[];
  dateString: string;

  constructor(private http: HttpClient, private pipe: DecimalPipe) {}

  getSubjects() {
    return this.http.get<Subject[]>(
      "http://localhost:8080/api/subject/get-all"
    );
  }

  getSubjectList() {
    this.getSubjects().subscribe((response) => (this.subjectsList = response));

    return this.subjectsList;
  }

  getSubjectsForLecturer(id) {
    return this.http.get<Subject[]>(
      SUBJECTURL + "get-subjects-for-lecturer?lecturerId=" + id
    );
  }

  getStudentsForSubjectPrijavio(id) {
    return this.http.get<Student[]>(
      SUBJECTURL + "get-students-prijavio?subjectId=" + id
    );
  }

  update(subject): Observable<any> {
    return this.http.put(
      SUBJECTURL + "update/" + subject.id,
      {
        id: subject.id,
        subjectName: subject.subjectName,
        shortName: subject.shortName,
        ectsPoints: subject.ectsPoints,
        lecturerDTO: subject.lecturerDTO,
        StudentHasSubject: subject.studentHasSubjects,
      },
      httpOptions
    );
  }

  updatePlaceAndDate(form, subject : Subject,  time) {
    this.dateString = form.examDate.year + "/" + form.examDate.month + "/" + form.examDate.day;
    var date = new Date(this.dateString);
    date.setHours(time.hour);
    date.setMinutes(time.minute);
    console.log(date);
    subject.placeOfExam = form.examPlace;
    subject.examDate = date;
    return this.http.put(
      SUBJECTURL +
        "update-place-date?hour=" + time.hour +
        "&minute=" + time.minute,
        subject,
      httpOptions
    );
  }

  createSubject(form, lecturers) {
    return this.http.post<Subject>(
      "http://localhost:8080/api/manager/" + "create-subject",
      {
        subjectName: form.subjectName,
        shortName: form.shortName,
        ectsPoints: form.ectsPoints,
        lecturerDTO: lecturers,
      },
      httpOptions
    );
  }
}
