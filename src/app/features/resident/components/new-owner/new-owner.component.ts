import { Component, HostListener, OnInit  } from '@angular/core';

@Component({
  selector: 'app-new-owner',
  templateUrl: './new-owner.component.html',
  styleUrl: './new-owner.component.scss'
})
export class NewOwnerComponent implements OnInit {

  panelOpenState = true;

  owners = [
    { name: 'Pranay Kalgutkar', adharcardNo: 'PKxxxxxx34', emailId:'pranay.k@gmail.com', contact: '9876543210', details: 'Details about Owner 1', picture: 'https://upload.wikimedia.org/wikipedia/en/9/90/HeathJoker.png' },
    { name: 'Gopalkrishna Kalgutkar', adharcardNo: 'KAxxxxxx45', emailId:'N/A', contact: '9912334521', details: 'Details about Owner 2', picture: 'https://upload.wikimedia.org/wikipedia/en/9/90/HeathJoker.png' },
  ];

  cols: number = 2; // Default to 2 columns for large screens

  ngOnInit(): void {
    const screenWidth = window.innerWidth;
    this.adjustColumns(screenWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    const screenWidth = event.target.innerWidth;
    this.adjustColumns(screenWidth);
  }

  adjustColumns(screenWidth: number): void {
    if (screenWidth <= 768) {
      this.cols = 1; // Display vertically on small screens
    } else {
      this.cols = 2; // Display horizontally on larger screens
    }
  }
}
