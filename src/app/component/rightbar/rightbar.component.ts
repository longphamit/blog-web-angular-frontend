import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RightbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
