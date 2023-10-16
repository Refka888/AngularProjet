import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from './../services/face-snaps.services';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
@Input() faceSnap!: FaceSnap;
 buttonText!: string;

 constructor(private FaceSnapsService: FaceSnapsService){}


  ngOnInit(): void {
      this.buttonText = 'Oh Snaps!';
    }
  onSnap(){
    if(this.buttonText === 'Oh Snaps!'){
      this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id);
      this.buttonText = 'Oops, unSnap!';
    }else{
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snaps!';
    }
    
  }
}
