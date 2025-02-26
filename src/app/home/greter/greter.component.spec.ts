import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreterComponent } from './greter.component';

describe('GreterComponent', () => {
  let component: GreterComponent;
  let fixture: ComponentFixture<GreterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
