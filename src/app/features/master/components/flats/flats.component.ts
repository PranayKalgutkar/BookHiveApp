import { AfterViewInit, Component } from '@angular/core';
import { ChangeDetectorRef, OnInit, ViewChild } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { FlatType, Flat } from '../../../../shared/models/flat-type';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { catchError, delay, map, merge, startWith, switchMap, tap } from 'rxjs';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-flats',
  templateUrl: './flats.component.html',
  styleUrl: './flats.component.scss'
})
export class FlatsComponent implements OnInit {

  displayedColumns: string[] = ['flatId', 'flatNo', 'flatTypeValue', 'createdOn', 'createdBy'];
  dataSource = new MatTableDataSource<Flat>(); // Initially empty data source

  flats: Flat[] = [];
  totalData: number | undefined;
  pageSizes = [5, 10];
  loading = false;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private masterService: MasterService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setRecordToMatTable();
    this.cdr.detectChanges();
  }

  setRecordToMatTable(): void {
    // Initialize paginator and sort for the MatTable DataSource
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // Reset paginator to the first page when sort order changes
    this.sort.sortChange.subscribe(() => {
      this.paginator.pageIndex = 0;
    });

    // Start loading indicator
    this.loading = true;

    // Listen to sort and paginator changes, and trigger service calls
    this.observeSortAndPaginationChanges()
      .subscribe({
        next: (flatTypes) => {
          // When data is received, stop loading and update the table data
          this.loading = false;
          this.flats = flatTypes;
          this.dataSource = new MatTableDataSource(this.flats);
        },
        error: () => {
          // Handle errors, stop loading
          this.loading = false;
          this.flats = [];
          this.dataSource = new MatTableDataSource(this.flats);
        }
      });
  }

  private observeSortAndPaginationChanges() {
    return merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}), // Ensure it triggers the first time
        switchMap(() => {
          // Fetch data based on current paginator and sort state
          return this.fetchDataFromServer();
        }),
        map((response) => {
          // Process response and handle null values
          return this.processResponse(response);
        })
      );
  }

  private fetchDataFromServer() {
    const postData = {
      page: this.paginator.pageIndex + 1,  // Adjust page index for server-side pagination
      limit: this.paginator.pageSize,
      sortColumn: this.sort.active,
      sortDirection: this.sort.direction
    };

    return this.masterService.fetchFlats(postData)
      .pipe(
        catchError((err) => {
          // In case of error, return an empty array and stop loading
          this.loading = false;
          return [];
        }),
        delay(1000) // Add a delay to simulate loading
      );
  }

  private processResponse(response: any) {
    console.log("Response:", response);
    if (!response.data) {
      return [];
    }

    // Store the total count of data for pagination (if required)
    this.totalData = response.data.item2;

    // Return the actual data for the table
    return response.data.item1;
  }
}
