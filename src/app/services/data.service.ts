import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() { 
    this.questions = [
      {
        text:'What is your name?',
        answer: 'My name is Mohanad Elhag',
        hide: true
      },
      {
        text:'What is your favorite color?',
        answer: 'My favorite color is Black',
        hide:true
      },
      {
        text:'What is your favorite programming language?',
        answer: 'My favorite language is JavaScript',
        hide:true
      }
    ];
  }

  getQuestions(){
    return this.questions;
  }

}
