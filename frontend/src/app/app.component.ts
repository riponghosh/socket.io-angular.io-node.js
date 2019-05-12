import { Component } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	private socket = io('http://localhost:3000');
	title = 'frontend';
}
