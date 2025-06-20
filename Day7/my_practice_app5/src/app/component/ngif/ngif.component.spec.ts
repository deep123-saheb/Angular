import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifComponent } from './ngif.component';

describe('NgifComponent', () => {
  let component: NgifComponent;
  let fixture: ComponentFixture<NgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
