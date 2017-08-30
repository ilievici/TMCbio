import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {
  message = { clientName: '', clientPhone: '', clientEmail: '', Message: '' };

  ngOnInit(): void {
  }
}
