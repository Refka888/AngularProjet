import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from './../services/face-snaps.services';
import { Router } from '@angular/router';



@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
 @Input()faceSnap!: FaceSnap;
 buttonText!: string;

 constructor(private FaceSnapsService: FaceSnapsService, private router : Router){}


  ngOnInit(): void {
      this.buttonText = 'Oh Snaps!';
      
    }
  onSnap(){
    if(this.buttonText === 'Oh Snaps!'){
      this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    }else{
      this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snaps!';
    }
    
  }
  onViewFaceSnap(){
this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
