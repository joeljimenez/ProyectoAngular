import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFotosComponent } from './show-fotos.component';

describe('ShowFotosComponent', () => {
  let component: ShowFotosComponent;
  let fixture: ComponentFixture<ShowFotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
