import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent {
  @Input() profileUrl: string;
  @Input() displayName: string;

  profileString: string;
  bgColor: string;

  ngOnInit() {
    this.setProfileString();
    this.setRandomBgColor();
  }

  setProfileString() {
    let userNames = this.displayName.split(' ');
    if(userNames.length > 1) {
      this.profileString = userNames[userNames.length-2][0] + userNames[userNames.length-1][0];
    } 
    else {
      this.profileString = userNames[0][0];
    }
  }

  setRandomBgColor() {
    this.bgColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}
