import { Component, OnInit } from '@angular/core';
import { SquareService } from '../square.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  number = 2;

  constructor(private squareService: SquareService) { }

  ngOnInit(): void {
  
  }

  square() {
    this.squareService.square(this.number).subscribe(result => this.number = result);
  }
}
