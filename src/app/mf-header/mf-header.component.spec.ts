import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfHeaderComponent } from './mf-header.component';

describe('MfHeaderComponent', () => {
  let component: MfHeaderComponent;
  let fixture: ComponentFixture<MfHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
