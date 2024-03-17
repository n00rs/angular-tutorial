import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {

  constructor() { }
  public arrArray = [
    { intPk: 1, strName: "a" },
    { intPk: 2, strName: "b" },
    { intPk: 3, strName: "c" },
    { intPk: 4, strName: "d" },
    { intPk: 5, strName: "e" },
    { intPk: 6, strName: "f" },
    { intPk: 7, strName: "g" },
    { intPk: 8, strName: "h" },
    { intPk: 9, strName: "i" },
    { intPk: 10, strName: "j" },
    { intPk: 11, strName: "k" },
    { intPk: 12, strName: "l" },
    { intPk: 13, strName: "m" },

  ];
  public getArray(){
    return this.arrArray;
  }
}
