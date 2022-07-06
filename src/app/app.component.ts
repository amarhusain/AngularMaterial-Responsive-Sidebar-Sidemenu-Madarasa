import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, HostListener, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'beat-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	options = this.fb.group({
		bottom: 0,
		fixed: false,
		top: 0,
	});

	constructor(private fb: FormBuilder) {

	}


}
