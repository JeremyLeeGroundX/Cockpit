import { Component, OnInit } from '@angular/core';
import {BlockCheckerService} from "../block-checker.service";

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.scss']
})
export class RealtimeComponent implements OnInit {

  constructor(private bcs: BlockCheckerService) { }


  check: string;
  ngOnInit() {
    this.check = this.bcs.check();
  }

}
