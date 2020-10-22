import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'mango-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isCollapsed = false
  constructor() {}

  ngOnInit(): void {}
}
