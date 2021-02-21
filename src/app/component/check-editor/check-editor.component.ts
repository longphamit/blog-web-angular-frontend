import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-check-editor',
  templateUrl: './check-editor.component.html',
  styleUrls: ['./check-editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
