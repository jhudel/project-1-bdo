import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  private entries: any[] = [];

  getAllEntries(): any[] {
    return this.entries;
  }

  toLowerCaseSafe(value: string | undefined): string {
    return value ? value.toLowerCase() : '';
  }
  
  addEntry(newEntry: any): void {
    const isDuplicate = this.entries.some(entry => {
      const isSameIdNumber = this.toLowerCaseSafe(entry.idNumber) === this.toLowerCaseSafe(newEntry.idNumber);
      const isSameField2 = this.toLowerCaseSafe(entry.firstName) === this.toLowerCaseSafe(newEntry.firstName);
      const isSameField3 = this.toLowerCaseSafe(entry.lastName) === this.toLowerCaseSafe(newEntry.lastName);
      return isSameIdNumber || isSameField2 || isSameField3;
    });

    if (isDuplicate) {
      window.alert('Duplicate entry detected!');
      return;
    }
    const uuid = uuidv4();
    this.entries.push({ ...newEntry, UUID: uuid });
  }
  
  updateEntry(updatedEntry: any): void {
    const isDuplicate = this.entries.some((entry, index) => {
      const isSameIdNumber = this.toLowerCaseSafe(entry.idNumber) === this.toLowerCaseSafe(updatedEntry.idNumber);
      const isSameField2 = this.toLowerCaseSafe(entry.firstName) === this.toLowerCaseSafe(updatedEntry.firstName);
      const isSameField3 = this.toLowerCaseSafe(entry.field3) === this.toLowerCaseSafe(updatedEntry.lastName);

      return index !== -1 && index !== undefined && (isSameIdNumber || isSameField2 || isSameField3);
    });

    if (isDuplicate) {
      window.alert('Duplicate entry detected during update!');
      return;
    }

    const index = this.entries.findIndex(entry => entry.UUID === updatedEntry.UUID);

    if (index !== -1) {
      this.entries[index] = { ...updatedEntry };
    }
  }

  deleteEntry(idNumber: string): void {
    this.entries = this.entries.filter((entry) => entry.idNumber !== idNumber);
  }
}
