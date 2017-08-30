import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from '../models/product';
import { OrderDetail } from '../models/order-detail';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let products = this.getProducts();
        let orderdetails = this.getOrderDetails();

        return {
            products,
            orderdetails
        };
    }
    private getProducts(): Product[] {
        const data: Product[] = [
            {
                id: 'A75C8BFC-8CA9-408A-8239-C17856ABDD43',
                name: 'Product A',
                price: 700,
                stockQuantity: 4,
                totalAvailable: [],
                totalPay: 0,
                imagePath: 'assets/img/product1.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, varius sed dolor. Donec augue lacus, vulputate sed consectetur facilisis, interdum pharetra ligula. Nulla suscipit erat nibh, ut porttitor nisl dapibus eu.'
            },
            {
                id: '40C9A486-6F52-4C57-A97E-2D3AC53C33FD',
                name: 'Product B',
                price: 595,
                stockQuantity: 15,
                totalAvailable: [],
                totalPay: 0,
                imagePath: 'assets/img/product1.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, varius sed dolor. Donec augue lacus, vulputate sed consectetur facilisis, interdum pharetra ligula. Nulla suscipit erat nibh, ut porttitor nisl dapibus eu.'

            },
            {
                id: '16D10F20-8B72-41BB-BFB9-16A62DD5BEE5',
                name: 'Product C',
                price: 984,
                stockQuantity: 2,
                totalAvailable: [],
                totalPay: 0,
                imagePath: 'assets/img/product1.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, varius sed dolor. Donec augue lacus, vulputate sed consectetur facilisis, interdum pharetra ligula. Nulla suscipit erat nibh, ut porttitor nisl dapibus eu.'

            },
            {
                id: 'B7781331-1B02-498C-91BD-3FDD9C11FD4F',
                name: 'Product D',
                price: 345,
                stockQuantity: 0,
                totalAvailable: [],
                totalPay: 0,
                imagePath: 'assets/img/product1.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, varius sed dolor. Donec augue lacus, vulputate sed consectetur facilisis, interdum pharetra ligula. Nulla suscipit erat nibh, ut porttitor nisl dapibus eu.'
            }
        ];

        let products: Product[] = [];

        data.forEach(s => {
            for (var i = 0; i <= s.stockQuantity; i++) {
                if (i >= 7)
                    continue;
                s.totalAvailable.push(i);
            }

            if (s.stockQuantity > 0)
                products.push(s);
        });

        return products;
    }

    private getOrderDetails(): OrderDetail[] {
        let details: OrderDetail[] = [];
        return details;
    }
}