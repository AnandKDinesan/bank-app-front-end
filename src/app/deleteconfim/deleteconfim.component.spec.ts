import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteconfimComponent } from './deleteconfim.component';

describe('DeleteconfimComponent', () => {
  let component: DeleteconfimComponent;
  let fixture: ComponentFixture<DeleteconfimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteconfimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteconfimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
