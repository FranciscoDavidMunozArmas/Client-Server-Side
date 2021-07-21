import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplepageComponent } from './examplepage.component';

describe('ExamplepageComponent', () => {
  let component: ExamplepageComponent;
  let fixture: ComponentFixture<ExamplepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
