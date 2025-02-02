import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemFaceCareComponent } from './item-face_care.component';



describe('ItemFaceCareComponent', () => {
  let component: ItemFaceCareComponent;
  let fixture: ComponentFixture<ItemFaceCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemFaceCareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemFaceCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
