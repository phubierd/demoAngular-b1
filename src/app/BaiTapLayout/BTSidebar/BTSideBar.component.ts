import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-side-bar',
    template: `
        <div class="sidebar">
            sidebar
        </div>
    
    `,
    styles: [
        `
            .sidebar {
                background-color:yellow;
            color:#fff;
            }
        `
    ]
})

export class BTSideBarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}