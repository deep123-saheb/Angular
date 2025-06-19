import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaxtVariableComponent } from './contaxt-variable.component';

describe('ContaxtVariableComponent', () => {
  let component: ContaxtVariableComponent;
  let fixture: ComponentFixture<ContaxtVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContaxtVariableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContaxtVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
