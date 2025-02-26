import { Routes } from '@angular/router';
import { ContactsTableComponent } from './contacts/contacts-table/contacts-table.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { SentMessagesComponent } from './messages/sent-messages/sent-messages.component';
import { ReceivedMessagesComponent } from './messages/received-messages/received-messages.component';
import { FavoritesComponent } from './messages/favorites/favorites.component';
import { TrashComponent } from './messages/trash/trash.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
export const appRoutes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactsTableComponent }, 
    
  
  {
    path: 'messages',
    component: MessagesListComponent,
    children: [
      { path: 'sent', component: SentMessagesComponent },
      { path: 'received', component: ReceivedMessagesComponent },
      { path: 'favorites', component: FavoritesComponent }
    ]
},
{
path: 'navbar',
component: MessagesListComponent,
children: [
  { path: 'trash', component: TrashComponent },
  { path: 'settings', component: SettingsComponent },
]
}
];

