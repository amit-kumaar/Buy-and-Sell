import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListingPage } from './my-listing-page';

describe('MyListingPage', () => {
  let component: MyListingPage;
  let fixture: ComponentFixture<MyListingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyListingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyListingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
