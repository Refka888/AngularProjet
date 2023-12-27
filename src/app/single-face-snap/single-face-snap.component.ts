import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from './../services/face-snaps.services';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
 faceSnap!: FaceSnap;
 buttonText!: string;

 constructor(private FaceSnapsService: FaceSnapsService, 
  private route: ActivatedRoute)
 {}


  ngOnInit() {
      this.buttonText = 'Oh Snaps!';
      const faceSnapId = +this.route.snapshot.params['id'];
      this.faceSnap = this.FaceSnapsService.getFaceSnapById(faceSnapId);
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

}
