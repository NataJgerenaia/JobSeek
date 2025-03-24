import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompregComponent } from './compreg.component';

describe('CompregComponent', () => {
  let component: CompregComponent;
  let fixture: ComponentFixture<CompregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompregComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
