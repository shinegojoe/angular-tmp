import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIconComponent } from './test-icon.component';

describe('TestIconComponent', () => {
  let component: TestIconComponent;
  let fixture: ComponentFixture<TestIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
