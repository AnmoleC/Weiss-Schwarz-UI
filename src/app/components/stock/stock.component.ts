import { Component, Input } from '@angular/core';

@Component({
    selector: 'stock',
    templateUrl: './stock.component.html',
    styleUrls: ['./stock.component.css']
})
export class StockComponent {
    @Input() stock: Array<any>
}