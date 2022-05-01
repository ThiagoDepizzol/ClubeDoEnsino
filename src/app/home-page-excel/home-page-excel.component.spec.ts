import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageExcelComponent } from './home-page-excel.component';

describe('HomePageExcelComponent', () => {
  let component: HomePageExcelComponent;
  let fixture: ComponentFixture<HomePageExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
