import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AppMatTabSecondaryInfoComponent } from '../../../../shared/components/app-mat-tab-secondary-info/app-mat-tab-secondary-info.component';

@Component({
  selector: 'app-new-owner',
  templateUrl: './new-owner.component.html',
  styleUrl: './new-owner.component.scss'
})
export class NewOwnerComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  panelOpenState = true;

  uiForm!: FormGroup;
  @ViewChild(AppMatTabSecondaryInfoComponent) matTabSecondaryInfoComponent!: AppMatTabSecondaryInfoComponent;
  imageUrl: string | undefined;

  owners = [
    { name: 'Pranay Kalgutkar', adharcardNo: 'PKxxxxxx34', emailId: 'pranay.k@gmail.com', contact: '9876543210', details: 'Details about Owner 1', picture: 'https://upload.wikimedia.org/wikipedia/en/9/90/HeathJoker.png' },
    { name: 'Gopalkrishna Kalgutkar', adharcardNo: 'KAxxxxxx45', emailId: 'N/A', contact: '9912334521', details: 'Details about Owner 2', picture: 'https://upload.wikimedia.org/wikipedia/en/9/90/HeathJoker.png' },
  ];

  cols: number = 2; // Default to 2 columns for large screens

  ngOnInit(): void {
    //const screenWidth = window.innerWidth;
    //this.adjustColumns(screenWidth);
    this.uiForm = this.formBuilder.group({
      ownershipId: [""],
      ownershipTitle: [""],
      saleDeedDate: [""],
      possessionDate: [""],
      ownershipType:[""],
      isActive:[""]
      //userFormControls : userInfoForm
    });
  }

  isChecked = false; // Initial state

  onToggleChange(event: any) {
    console.log('Slide Toggle Value:', event.checked);
  }

  onSubmit(): void {
    debugger;
  }
}
