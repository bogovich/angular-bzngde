import { TestBed } from '@angular/core/testing';
import { ProductAlertsComponent } from './product-alerts.component';
describe('ProductAlertsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProductAlertsComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ProductAlertsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=product-alerts.component.spec.js.map