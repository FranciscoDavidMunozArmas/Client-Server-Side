import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplemodalComponent } from './examplemodal.component';

describe('ExamplemodalComponent', () => {
  let component: ExamplemodalComponent;
  let fixture: ComponentFixture<ExamplemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplemodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
