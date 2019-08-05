import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMarcasComponent } from './index-marcas.component';

describe('IndexMarcasComponent', () => {
  let component: IndexMarcasComponent;
  let fixture: ComponentFixture<IndexMarcasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexMarcasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
