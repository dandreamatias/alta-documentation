import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAltaComponent } from './why-alta.component';

describe('WhyAltaComponent', () => {
  let component: WhyAltaComponent;
  let fixture: ComponentFixture<WhyAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
