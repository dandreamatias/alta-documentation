import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccorditionComponent } from './accordition.component';

describe('AccorditionComponent', () => {
  let component: AccorditionComponent;
  let fixture: ComponentFixture<AccorditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccorditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccorditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
