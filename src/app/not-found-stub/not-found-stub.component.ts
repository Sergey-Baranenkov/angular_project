import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-not-found-stub',
  templateUrl: './not-found-stub.component.html',
  styleUrls: ['./not-found-stub.component.css']
})
export class NotFoundStubComponent implements OnInit {
  @Input() text = 'Тут пока ничего нет';

  constructor() { }

  ngOnInit(): void {
  }

}
