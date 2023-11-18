import { Component } from '@angular/core';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent {
  entries: any[] = [];
  newEntry: any = {};
  selectedEntry: any = {};
  updatingEntry: any = [];

  constructor(private entryService: EntryService) {
    this.entries = this.entryService.getAllEntries();
  }
  
  addEntry(): void {
    this.entryService.addEntry(this.newEntry);
    this.entries = this.entryService.getAllEntries();
    this.newEntry = {}; 
  }

  updateEntry(entry: any): void {
    this.selectedEntry = { ...entry };
    this.updatingEntry = { ...entry };
  }

  saveUpdate(): void {
    let userData = this.updatingEntry;
    if (this.selectedEntry != null) {
      this.entryService.updateEntry(this.selectedEntry);
    }
    this.selectedEntry = {};
    this.entries = this.entryService.getAllEntries();
  }

  deleteEntry(idNumber: string): void {
    this.entryService.deleteEntry(idNumber);
    this.entries = this.entryService.getAllEntries();
  }
}
