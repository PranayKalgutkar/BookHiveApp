import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserFile } from '../../models/user-file';
import { UserInfo } from '../../models/user-info';
import { OpenTab } from '../../models/open-tab';

@Component({
  selector: 'app-app-mat-tab-secondary-info',
  templateUrl: './app-mat-tab-secondary-info.component.html',
  styleUrl: './app-mat-tab-secondary-info.component.scss'
})
export class AppMatTabSecondaryInfoComponent {
  //userInfoForm!: FormGroup;
  @Input() userInfoForm!: FormGroup;

  tabs = ['First'];
  selected = new FormControl(0);
  indexCount = 0;

  imageSrc: string[] = []; // Array to store imageSrc for each tab
  isSelectedFile: boolean[] = []; // Array to track if file is selected for each tab
  fileInputs: File[] = [];  // Add an array to store file objects for each tab

  filesToBeUploaded: UserFile[] = [];
  filesOnOpenTabs: OpenTab[] = [];

  userFile: UserFile | undefined;

  constructor() {
    this.userInfoForm = new FormGroup({});
  }

  ngOnInit() {
    //this.fetchFile()
    this.tabs.forEach((tab, index) => {
      this.userInfoForm.addControl(`fullName_${index}`, new FormControl(''));
      this.userInfoForm.addControl(`adharCardNo_${index}`, new FormControl(''));
      this.userInfoForm.addControl(`emailId_${index}`, new FormControl(''));
      this.userInfoForm.addControl(`mobileNo_${index}`, new FormControl(''));
    });
  }

  addTab(selectAfterAdding: boolean) {
    debugger;
    this.tabs.forEach((tab, index) => {
      this.indexCount = index;
    })

    var newIndex = this.indexCount + 1;
    this.tabs.push('New');

    this.userInfoForm.addControl(`fullName_${newIndex}`, new FormControl(''));
    this.userInfoForm.addControl(`adharCardNo_${newIndex}`, new FormControl(''));
    this.userInfoForm.addControl(`emailId_${newIndex}`, new FormControl(''));
    this.userInfoForm.addControl(`mobileNo_${newIndex}`, new FormControl(''));

    this.imageSrc[newIndex] = '';
    this.isSelectedFile[newIndex] = false;

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    // Remove the image source and selected file status associated with the deleted tab
    this.imageSrc.splice(index, 1);
    this.isSelectedFile.splice(index, 1);

    // Update the tabs array and selected index
    this.tabs.splice(index, 1);
    this.selected.setValue(index > 0 ? index - 1 : 0);

    this.userInfoForm.removeControl(`fullName_${index}`);
    this.userInfoForm.removeControl(`adharCardNo_${index}`);
    this.userInfoForm.removeControl(`emailId_${index}`);
    this.userInfoForm.removeControl(`mobileNo_${index}`);
  }

  clearFile(index: number, fileFor: string) {
    debugger;
    var a = this.filesOnOpenTabs;
    this.imageSrc[index] = '';
    this.isSelectedFile[index] = false;
    const fileInput = document.getElementById('fileInput_' + index) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = ''; // Clear file input value
    }

    const currentTabUserFiles = this.getUserFilesByIndex(index);
    if (currentTabUserFiles) {
      const fileIndex = currentTabUserFiles.findIndex(userFile => userFile.fileFor === fileFor);

      if (fileIndex !== -1) {
        currentTabUserFiles.splice(fileIndex, 1);
      }
    }
  }

  onProfileFileSelected(event: any, index: number, fileFor: string) {
    debugger;
    const selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (e: any) => {

      this.imageSrc[index] = e.target.result;
      this.isSelectedFile[index] = true;

      const base64String = e.target.result.split(',')[1];

      this.setFileDataToModel(selectedFile, base64String, fileFor);

      //this.filesToBeUploaded.push(this.userFile!);
      this.filesToBeUploaded[index] = this.userFile!;

      const openTab: OpenTab = {
        indexNumber: index,
        userFiles: [this.userFile!]
      };

      this.filesOnOpenTabs.push(openTab);
    };
    reader.readAsDataURL(selectedFile!);
  }

  getUserFilesByIndex(index: number): UserFile[] | undefined {
    const tab = this.filesOnOpenTabs.find(tab => tab.indexNumber === index);
    return tab?.userFiles;
  }

  getUserFileByIndex(index: number): UserFile[] | undefined {
    const tab = this.filesOnOpenTabs.find(tab => tab.indexNumber === index);
    if (tab && tab.userFiles) {
      return tab.userFiles.filter(userFile => userFile.fileFor === 'Profile');
    }
    return undefined;
  }

  //const userFiles11 = this.getUserFilesByIndex(3);

  setFileDataToModel(selectedFile: File, base64String: string, controlFor: string): UserFile {
    this.userFile = {
      fileId: 0,
      fileName: selectedFile.name,
      fileContentType: selectedFile.type,
      fileSize: selectedFile.size,
      fileDataBase64String: base64String,
      fileDataByte: null,
      fileFor: controlFor,
      foreignKeyReferenceId: 0,
      foreignKeyReferenceTo: 1,
      createdOn: null, //new Date(),
      createdBy: 'Pranay K'
    };
    return this.userFile;
  }

  setFormDataToModel(): UserInfo[] {
    //alert("setFormDataToModel called");
    debugger;

    const formData: UserInfo[] = []; // Array to hold form data for each tab

    this.tabs.forEach((_tab, index) => {
      let userInfo: UserInfo = {
        fullName: this.userInfoForm.get(`fullName_${index}`)?.value,
        adharCardNo: this.userInfoForm.get(`adharCardNo_${index}`)?.value,
        emailId: this.userInfoForm.get(`emailId_${index}`)?.value,
        mobileNo: this.userInfoForm.get(`mobileNo_${index}`)?.value,
        userId: 0,
        foreignKeyReferenceId: 0,
        //userFiles: this.filesToBeUploaded  //this.fileInputs[index]
        //userFiles: [this.filesToBeUploaded[index]]  //this.fileInputs[index]
        userFiles: this.getUserFilesByIndex(index)
      };
      formData.push(userInfo);
    });
    console.log("formData : ", formData);
    return formData; // Return the array of form data
  };
}
