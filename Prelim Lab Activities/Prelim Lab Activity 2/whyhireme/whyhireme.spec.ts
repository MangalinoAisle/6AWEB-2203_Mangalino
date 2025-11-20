import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whyhireme } from './whyhireme';

describe('Whyhireme', () => {
  let component: Whyhireme;
  let fixture: ComponentFixture<Whyhireme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Whyhireme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Whyhireme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
