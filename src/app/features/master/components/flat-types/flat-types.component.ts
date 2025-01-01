import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-flat-types',
  templateUrl: './flat-types.component.html',
  styleUrl: './flat-types.component.scss'
})
export class FlatTypesComponent implements OnInit {

  flatTypes: any[] | null = null;
  errorMessage: string = '';

  constructor(private masterService: MasterService) { }

  ngOnInit(): void {
    this.fetchFlatTypes();
  }

  fetchFlatTypes() {
    this.masterService.fetchFlatTypes()
      .subscribe({
        next: (result) => {
          this.flatTypes = result?.data || [];
        },
        error: (err) => {
          this.errorMessage = 'Error fetching data from the server';
          console.error('Error fetching flat types:', err);
        }
      });
  }
}
