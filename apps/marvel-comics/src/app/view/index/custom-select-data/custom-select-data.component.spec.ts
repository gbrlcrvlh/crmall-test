import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSelectDataComponent } from './custom-select-data.component';

describe('CustomSelectDataComponent', () => {
  let component: CustomSelectDataComponent;
  let fixture: ComponentFixture<CustomSelectDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSelectDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSelectDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
