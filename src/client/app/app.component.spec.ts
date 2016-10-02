import { TestBed } from '@angular/core/testing';

import { ThingModule } from './thing/thing.module';
import { AppComponent } from './app.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent], imports: [ThingModule]});
  });
  
  it ('should create AppComponent', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true);
  });
});