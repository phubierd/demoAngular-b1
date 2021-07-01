import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-footer',
    template: `
        <div class="footer">
            footer
        </div>
    `,
    styles:[
        `
        .footer {
            background-color:pink;
            color:#fff;
        }
    `
    ]
})

export class BTFooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}