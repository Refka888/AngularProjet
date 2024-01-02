import { Component, OnInit } from '@angular/core';
import { interval, of, Observable } from 'rxjs';
import { delay, map, mergeMap, take, tap } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(): void{}
}
  
