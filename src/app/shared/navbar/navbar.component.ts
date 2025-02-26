import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);  // Toggle dark mode
  }

  toggleMessages() {
    console.log('Messages button clicked!');
    // Handle messages toggle logic
  }

  logout() {
    console.log('Logging out!');
    // Handle logout logic
  }
}
