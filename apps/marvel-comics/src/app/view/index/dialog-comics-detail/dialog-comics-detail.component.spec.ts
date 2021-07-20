import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComicsDetailComponent } from './dialog-comics-detail.component';

describe('DialogComicsDetailComponent', () => {
  let component: DialogComicsDetailComponent;
  let fixture: ComponentFixture<DialogComicsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogComicsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComicsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
