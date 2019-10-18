import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlockCheckerService {

  constructor() { }
  check() {
    return "<div> CHECK </div>";
  }
}
