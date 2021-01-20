import { TestBed } from '@angular/core/testing';

import {StorageService} from './storage.service';

let storageService: StorageService;

describe('StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          StorageService
      ]
    });
    storageService = TestBed.get(StorageService);
  });

  it('Storage Service should be created', () => {
    const service: StorageService = TestBed.get(StorageService);
    expect(service).toBeTruthy();
  });

  it( 'saveToLocalStorage() | getFromLocalStorage() | Test Cases', (doneFn) => {
    const object = {test: 'Changed value'};
    storageService.saveToLocalStorage('test',  object);
    storageService.getFromLocalStorage('test').then((val) => {
      expect(val).toEqual(object);
      doneFn();
    });
  });
  it('removeFromLocalStorage() | Should remove Key from Local Storage', (doneFn) => {
    const object = {test: 'Test'};
    storageService.saveToLocalStorage('test', object);
    storageService.getFromLocalStorage('test').then((val) => {
      console.log('stored in local', val);
    });
    storageService.removeFromLocalStorage('test').then((val) => {
      expect(val).toBe(undefined);
      doneFn();
    });
  });
  it('clearLocalStorage() | Should Clear Everything from Local Storage', (doneFn) => {
    const object = {test: 'Test'};
    storageService.saveToLocalStorage('test', object);
    storageService.getFromLocalStorage('test').then((val) => {
      console.log('stored in local', val);
    });
    storageService.clearLocalStorage().then((val) => {
      expect(val).toBe(undefined);
      doneFn();
    });
  });

});
