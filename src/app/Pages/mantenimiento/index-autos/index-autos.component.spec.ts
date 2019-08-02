import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAutosComponent } from './index-autos.component';

describe('IndexAutosComponent', () => {
  let component: IndexAutosComponent;
  let fixture: ComponentFixture<IndexAutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexAutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
