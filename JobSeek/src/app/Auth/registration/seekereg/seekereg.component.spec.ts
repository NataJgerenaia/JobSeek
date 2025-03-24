import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekeregComponent } from './seekereg.component';

describe('SeekeregComponent', () => {
  let component: SeekeregComponent;
  let fixture: ComponentFixture<SeekeregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeekeregComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeekeregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
