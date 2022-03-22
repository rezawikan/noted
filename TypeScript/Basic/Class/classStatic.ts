class Coupon {
    static allowed = ['blackpepper', 'Paprika'];
    static create(percentage: number) {
        return `PIZZA_DISCOUNT_${percentage}`;
    }
}

Coupon.create(100);