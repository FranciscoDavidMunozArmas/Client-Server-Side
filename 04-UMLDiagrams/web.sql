/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     6/8/2021 09:55:25                            */
/*==============================================================*/


drop table if exists APPOINTMENT;

drop table if exists EMPLOYEE;

drop table if exists SERVICE;

drop table if exists SERVICEEMPLOYEE;

drop table if exists USER;

/*==============================================================*/
/* Table: APPOINTMENT                                           */
/*==============================================================*/
create table APPOINTMENT
(
   APPOINTMENTCODE      char(36) not null,
   SERVICECODE          char(8) not null,
   USERCODE             char(10) not null,
   APPOINTMENTDAYHOUR   datetime,
   primary key (APPOINTMENTCODE)
);

/*==============================================================*/
/* Table: EMPLOYEE                                              */
/*==============================================================*/
create table EMPLOYEE
(
   EMPLOYEECODE         char(10) not null,
   EMPLOYEENAME         varchar(32),
   primary key (EMPLOYEECODE)
);

/*==============================================================*/
/* Table: SERVICE                                               */
/*==============================================================*/
create table SERVICE
(
   SERVICECODE          char(8) not null,
   SERVICENAME          varchar(32),
   SERVICEDESCRIPTION   varchar(64),
   primary key (SERVICECODE)
);

/*==============================================================*/
/* Table: SERVICEEMPLOYEE                                       */
/*==============================================================*/
create table SERVICEEMPLOYEE
(
   SERVICECODE          char(8) not null,
   EMPLOYEECODE         char(10) not null,
   primary key (SERVICECODE, EMPLOYEECODE)
);

/*==============================================================*/
/* Table: USER                                                  */
/*==============================================================*/
create table USER
(
   USERCODE             char(10) not null,
   USERNAME             varchar(32),
   USERPASSWORD         varchar(32),
   primary key (USERCODE)
);

alter table APPOINTMENT add constraint FK_AGENDA foreign key (USERCODE)
      references USER (USERCODE) on delete restrict on update restrict;

alter table APPOINTMENT add constraint FK_APPOINTMENTSERVICE foreign key (SERVICECODE)
      references SERVICE (SERVICECODE) on delete restrict on update restrict;

alter table SERVICEEMPLOYEE add constraint FK_SERVICEEMPLOYEE foreign key (SERVICECODE)
      references SERVICE (SERVICECODE) on delete restrict on update restrict;

alter table SERVICEEMPLOYEE add constraint FK_SERVICEEMPLOYEE2 foreign key (EMPLOYEECODE)
      references EMPLOYEE (EMPLOYEECODE) on delete restrict on update restrict;

insert into EMPLOYEE values ("1751990332", "Xavier");
insert into EMPLOYEE values ("1751990333", "Loreto");
insert into EMPLOYEE values ("1751990334", "Daniel");

insert into SERVICE values ("1111111", "Corte de pelo", "Null");
insert into SERVICE values ("1111112", "Afeitar", "Null");
insert into SERVICE values ("1111113", "Pintar cabello", "Null");
insert into SERVICE values ("1111114", "Lavado de pelo", "Null");