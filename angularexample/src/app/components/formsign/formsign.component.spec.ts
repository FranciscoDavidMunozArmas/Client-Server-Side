import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsignComponent } from './formsign.component';

describe('FormsignComponent', () => {
  let component: FormsignComponent;
  let fixture: ComponentFixture<FormsignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
