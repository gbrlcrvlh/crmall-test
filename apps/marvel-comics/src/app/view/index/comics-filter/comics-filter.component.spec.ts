import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsFilterComponent } from './comics-filter.component';

describe('ComicsFilterComponent', () => {
  let component: ComicsFilterComponent;
  let fixture: ComponentFixture<ComicsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
