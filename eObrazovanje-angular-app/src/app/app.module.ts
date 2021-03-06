import { CreateUserModalComponent } from './create-user-modal/create-user-modal.component';
import { SortableDirective } from './directives/sortable.directive';
import { JwtHelperService, JwtModuleOptions, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { authInterceptorProviders } from './auth/auth.interceptor';

import { LoginComponent } from './login/login.component';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbLayoutComponent, NbCardComponent, NbMenuModule, NbCardModule, NbIconModule, NbContextMenuModule, NbUserModule, NbActionsModule, NbProgressBarModule, NbTreeGridModule, NbAlertModule, NbLayoutFooterComponent, NbSearchModule } from '@nebular/theme';
import { UserSideMenuComponent } from './user-side-menu/user-side-menu.component';
import { StudentSubjectsComponent } from './student-subjects/student-subjects.component';
import { HomeNewsNotificationsComponent } from './home-news-notifications/home-news-notifications.component';
import { ExamCheckInComponent } from './exam-check-in/exam-check-in.component';
import {TableModule} from 'primeng/table';

import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ButtonModule} from 'primeng/button';
import {ToastModule, Toast} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthService, NbTokenService, NbTokenStorage } from '@nebular/auth';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { PassedSubjectsComponent } from './passed-subjects/passed-subjects.component';
import { NonPassedSubjectsComponent } from './non-passed-subjects/non-passed-subjects.component';
import { ExamHistoryComponent } from './exam-history/exam-history.component';
import { FinancialCardComponent } from './financial-card/financial-card.component';
import { DocumentsComponent } from './documents/documents.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FinancialStatusComponent } from './exam-check-in/financial-status/financial-status.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { SubjectsAdminBoardComponent } from './subjects-admin-board/subjects-admin-board.component';
import { EditSubjectComponent } from './admin-board/edit-subject/edit-subject.component';
import { EditStudentBoardComponent } from './admin-board/edit-student-board/edit-student-board.component';
import { EditStudentComponent } from './admin-board/edit-student-board/edit-student/edit-student.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { SubjectCreationComponent } from './subject-creation/subject-creation.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SubjectExamManagmentComponent } from './subject-exam-managment/subject-exam-managment.component';
import { SubjectManagerComponent } from './subject-exam-managment/subject-manager/subject-manager.component';
import { ExamCheckOutComponent } from './exam-check-out/exam-check-out.component';
import { EditLecturerBoardComponent } from './admin-board/edit-lecturer-board/edit-lecturer-board.component';
import { EditLecturerComponent } from './admin-board/edit-lecturer/edit-lecturer.component';
import { ExampleComponentComponent } from './example-component/example-component.component';
import { ExamManagmentComponent } from './admin-board/exam-managment/exam-managment.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';




@NgModule({
  declarations: [
    AppComponent,
    UserSideMenuComponent,
    StudentSubjectsComponent,
    HomeNewsNotificationsComponent,
    ExamCheckInComponent,
    LoginComponent,
    AdminBoardComponent,
    PassedSubjectsComponent,
    NonPassedSubjectsComponent,
    ExamHistoryComponent,
    FinancialCardComponent,
    DocumentsComponent,
    FinancialStatusComponent,
    SubjectDetailsComponent,
    StudentDetailsComponent,
    SubjectsAdminBoardComponent,
    SortableDirective,
    EditSubjectComponent,
    EditStudentBoardComponent,
    EditStudentComponent,
    CreateUserModalComponent,
    UserCreationComponent,
    SubjectCreationComponent,
    SubjectExamManagmentComponent,
    SubjectManagerComponent,
    ExamCheckOutComponent,
    EditLecturerBoardComponent,
    EditLecturerComponent,
    ExampleComponentComponent,
    ExamManagmentComponent,
    ForgotPasswordComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbMenuModule,
    NbCardModule,
    NbEvaIconsModule,
    BrowserAnimationsModule,
    NbIconModule,
    NbContextMenuModule,
    NbUserModule,
    NbActionsModule,
    TableModule,
    NbProgressBarModule,
    ProgressBarModule,
    MultiSelectModule,
    SliderModule,
    DialogModule,
    DropdownModule,
    ContextMenuModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    NbTreeGridModule,
    NbIconModule,
    ReactiveFormsModule,
    FormsModule,
    JwtModule,
    BrowserModule,
    CommonModule,
    NbAlertModule,
    HttpClientModule,
    NbAuthModule.forRoot(),
    NgbModule,
    FormsModule,
    NgSelectModule,
    NbSearchModule,



  ],
  providers: [authInterceptorProviders,         { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService, DecimalPipe,
   ],
  bootstrap: [AppComponent]
})
export class AppModule {  }
