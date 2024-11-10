import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementComponent } from './announcements.component';

describe('AnnouncementsComponent', () => {
  let component: AnnouncementComponent;
  let fixture: ComponentFixture<AnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnouncementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
