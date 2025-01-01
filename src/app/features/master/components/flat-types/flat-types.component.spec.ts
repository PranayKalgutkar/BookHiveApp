import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatTypesComponent } from './flat-types.component';

describe('FlatTypesComponent', () => {
  let component: FlatTypesComponent;
  let fixture: ComponentFixture<FlatTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlatTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlatTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
