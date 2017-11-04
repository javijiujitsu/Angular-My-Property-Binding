import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDynamicImagebindingComponent } from './my-dynamic-imagebinding.component';

describe('MyDynamicImagebindingComponent', () => {
  let component: MyDynamicImagebindingComponent;
  let fixture: ComponentFixture<MyDynamicImagebindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDynamicImagebindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDynamicImagebindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
