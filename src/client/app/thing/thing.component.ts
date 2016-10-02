import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sp-thing',
    templateUrl: './thing.component.html',
    styleUrls: ['./thing.component.scss']
})
export class ThingComponent implements OnInit {
    value: string;

    ngOnInit(): void {
        this.value = 'my message';
    }

    changeIt(): void {
        this.value = 'new message';
    }
}
