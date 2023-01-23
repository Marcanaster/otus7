import { Component, OnInit, Input } from '@angular/core';

interface BreadCrumbItem{
  text: string
  link: string
}

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {
  // @Input() itens: Array<BreadCrumbItem> = []
  @Input() exibe: string = ""
  @Input() page: string = ""
  constructor(){}

  ngOnInit(){


  }

}
