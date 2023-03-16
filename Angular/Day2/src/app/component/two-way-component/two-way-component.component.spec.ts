import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayComponentComponent } from './two-way-component.component';

describe('TwoWayComponentComponent', () => {
  let component: TwoWayComponentComponent;
  let fixture: ComponentFixture<TwoWayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
