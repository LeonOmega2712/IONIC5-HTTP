import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinglePhotoPage } from './single-photo.page';

describe('SinglePhotoPage', () => {
  let component: SinglePhotoPage;
  let fixture: ComponentFixture<SinglePhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePhotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinglePhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
