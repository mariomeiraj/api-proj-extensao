-- create database workshop

drop table if exists usuario;

create table usuario(
  id serial primary key,
  nome text not null,
  email text not null unique,
  senha text not null
 );