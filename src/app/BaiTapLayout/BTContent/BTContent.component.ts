import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-content',
    template:`
        <div class="content">
            Content
        </div>
    `,
    styles:[
        `
            .content{
                background-color:blue;
                color:white;
            }
        `
    ]
})

export class BTContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}


