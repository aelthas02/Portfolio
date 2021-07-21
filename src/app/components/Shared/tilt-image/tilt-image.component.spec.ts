import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiltImageComponent } from './tilt-image.component';

describe('TiltImageComponent', () => {
  let component: TiltImageComponent;
  let fixture: ComponentFixture<TiltImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiltImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiltImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
