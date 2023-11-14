import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtrainComponent } from './viewtrain.component';

describe('ViewtrainComponent', () => {
  let component: ViewtrainComponent;
  let fixture: ComponentFixture<ViewtrainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewtrainComponent]
    });
    fixture = TestBed.createComponent(ViewtrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
