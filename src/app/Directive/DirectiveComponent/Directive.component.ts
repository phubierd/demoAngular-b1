import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive',
    template: `
        <div class="container" style="margin-bottom:500px;">
            <h3>ngIf</h3>

            <h3>{{number}}</h3>
            <input #num [value]="number" />
            <button (click)="nhapSo(num.value)">In</button>

            <div *ngIf="(number%2)===0">
                Số chẵn
            </div>

            <div *ngIf="(number%2)!==0">
                Số lẻ
            </div>

            <ng-template #tempSoLe>
                Số lẻ
            </ng-template>
        <hr />
            <h3>ng SwitchCase</h3>
            <select [(ngModel)]="color">
                <option value="black">black</option>
                <option value="red">red</option>
                <option value="pink">pink</option>
                <option value="yellow">yellow</option>
                <option value="orange">orange</option>
            </select>

            <div [ngSwitch]="color">
                <div *ngSwitchCase="'red'" style="color:red">Red</div>
                <div *ngSwitchCase="'black'" style="color:black">black</div>
                <div *ngSwitchCase="'pink'" style="color:pink">pink</div>
                <div *ngSwitchCase="'yellow'" style="color:yellow">yellow</div>
                <div *ngSwitchCase="'orange'" style="color:orange">orange</div>
            </div>

            <hr />
            <h3>Ngfor</h3>
            <h3>Product list</h3>
            <div class="row">
                <div class="col-4" *ngFor="let prod of arrProduct;let i = index;"> 
                    <div class="card text-left">
                      <img class="card-img-top" [src]="prod.img" alt="...">
                      <div class="card-body">
                        <h4 class="card-title">{{prod.name}}</h4>
                        <p class="card-text">{{prod.price}}</p>
                      </div>
                    </div>
                </div>
            </div>
            <h3>Table product</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>img</th>
                        <th>price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                    <ng-container *ngIf="arrProduct; else ketQuaRong">
                        <tr  *ngFor="let prod of arrProduct;let i = index">
                            <td>
                                {{prod.id}}
                            </td>
                            <td>
                                {{prod.name}}
                            </td>
                            <td>
                                <img src="{{prod.img}}" alt="..." width="50" height="50"/>
                            </td>
                            <td>
                                {{prod.price}}
                            </td>
                            <td>
                                <button class="btn btn-danger">Xoá</button>
                            </td>
                        </tr>
                    </ng-container>
                </tbody>
            </table>

            <ng-container *ngTemplateOutlet="ketQuaRong"></ng-container>
            <ng-container *ngTemplateOutlet="ketQuaRong"></ng-container>
            <ng-container *ngTemplateOutlet="ketQuaRong"></ng-container>
            <ng-container *ngTemplateOutlet="ketQuaRong"></ng-container>
            <ng-template #ketQuaRong>
                <div>Không tìm thấy kết quả !</div>
            </ng-template>

            <hr />
            <h3>ng-content</h3>
            <app-ng-content>
                    <h3 class="title">Title</h3>
                    <p class="content ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquam vel aut consequuntur itaque dicta omnis ratione, tempora veniam nemo temporibus adipisci ex assumenda delectus odit culpa officia nobis natus!
                    </p>
            </app-ng-content>
            <hr />
            <h3>ngClass</h3>

            <div class="container">
                <h3>Danh sách ghế</h3>
                <button [ngClass]="{'ghe-da-dat':ghe.daDat,'ghe-vip':ghe.vip}" class="ghe" *ngFor="let ghe of arrGhe" [disabled]="ghe.daDat">
                    {{ghe.stt}}
                </button>
            </div>
            <hr />
            <h3>ng Style</h3>
            <p [ngStyle]="{'font-size':fontSize + 'px'}">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima ea fuga pariatur delectus nobis culpa maxime, tempore nam corporis incidunt architecto non ab explicabo soluta omnis magni doloremque ratione! </p>
            <button (click)="tangFontSize()">+</button>
            <button (click)="giamFontSize()">-</button>
            <hr />
            <h3>Sử dụng thư viện antd</h3>
            <nz-carousel [nzEffect]="effect">
            <div nz-carousel-content *ngFor="let index of array">
                <h3>{{ index }}</h3>
            </div>
            </nz-carousel>
        </div>


    `,

    styleUrls: ['./Directive.component.scss']
})
export class DirectiveComponent implements OnInit {

    array = [1, 2, 3, 4];
    effect = 'scrollx';
  

    fontSize: number = 20;
    tangFontSize() {
        this.fontSize += 1;
    }
    giamFontSize() {
        this.fontSize -= 1;
    }


    arrGhe: Ghe[] = [
        { maGhe: '1', stt: '1', daDat: false, vip: false },
        { maGhe: '2', stt: '2', daDat: true, vip: true },
        { maGhe: '3', stt: '3', daDat: false, vip: true },
    ]

    arrProduct: Product[] = [
        { id: '1', name: 'Iphone X', price: 1000, img: 'https://picsum.photos/id/1/200/200' },
        { id: '2', name: 'Iphone XS', price: 2000, img: 'https://picsum.photos/id/2/200/200' },
        { id: '3', name: 'Iphone XS MAX', price: 3000, img: 'https://picsum.photos/id/3/200/200' }
    ]

    color: string = 'red';
    number: number = 6;

    constructor() { }
    nhapSo(num: string) {
        this.number = Number(num);
    }
    ngOnInit() { }
}

interface Ghe {
    maGhe: string,
    stt: string,
    daDat: boolean,
    vip: boolean
}

interface Product {
    id: string,
    name: string,
    price: number,
    img: string
}