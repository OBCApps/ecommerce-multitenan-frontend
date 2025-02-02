import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemTechnologyComponent } from './item-technology.component';



describe('ItemTechnologyComponent', () => {
  let component: ItemTechnologyComponent;
  let fixture: ComponentFixture<ItemTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemTechnologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
