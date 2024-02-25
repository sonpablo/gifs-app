import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page } from './home.component';

describe('HomeComponent', () => {
  let component: Page;
  let fixture: ComponentFixture<Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
