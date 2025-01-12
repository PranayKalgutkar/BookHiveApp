import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { FlatType } from '../../../../shared/models/flat-type';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { catchError, delay, map, merge, startWith, switchMap, tap } from 'rxjs';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-flat-types',
  templateUrl: './flat-types.component.html',
  styleUrl: './flat-types.component.scss'
})
export class FlatTypesComponent implements OnInit {

  displayedColumns: string[] = ['flatTypeId', 'flatTypeValue', 'createdOn', 'createdBy'];
  dataSource = new MatTableDataSource<FlatType>();

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  flatTypes: FlatType[] = [];
  totalData: number | undefined;
  pageSizes = [5, 10];
  errorMessage: string | undefined;

  // pageSizes = [2, 4];

  constructor(private masterService: MasterService, private cdr: ChangeDetectorRef) {}

  loading = false;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setRecordToMatTable();
    this.cdr.detectChanges();
  }

  setRecordToMatTable(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => {
      this.paginator.pageIndex = 0;
    });

    this.loading = true; // Only show Progress bar when the page is rendered for the first time.
    
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(startWith({}),
        switchMap(() => {
          // This triggers the service call to fetch flat types
          return this.masterService.fetchFlatTypes(
            this.paginator.pageIndex + 1,
            this.paginator.pageSize,
            this.sort.active, // Pass the active sorting column
            this.sort.direction // Pass the sorting direction
          ).pipe(
            catchError(err => {
              this.loading = false;
              return [];
            }),
            delay(1000) // Added delay of 1 second to show the progress bar
          );
        }),
        map((response) => {
          console.log("response :", response);
          if (response.data == null) {
            return [];
          }
          this.totalData = response.data.item2;
          return response.data.item1;
        })
      )
      .subscribe(record => {
        this.loading = false;
        console.log("record :", record);
        this.flatTypes = record;
        this.dataSource = new MatTableDataSource(this.flatTypes);
      });
  }


   fetchFlatTypes(pageNumber: number, pageSize: number, sortColumn: string, sortDirection: string) {
     this.masterService.fetchFlatTypes(pageNumber,pageSize, sortColumn, sortDirection)
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

   addFlatType() {
     const postData = { flatTypeId:11, flatTypeValue: "11BHK", createdOn : '2024-01-10T15:05:18.350113', createdBy : 'System Admin'};
     this.masterService.addFlatType(postData)
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

   modifyFlatType() {
     const postData = { flatTypeId:5, flatTypeValue: "5BHK", createdOn : '2024-01-10T15:05:18.350113', createdBy : 'System Admin'};
     this.masterService.modifyFlatType(postData)
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
