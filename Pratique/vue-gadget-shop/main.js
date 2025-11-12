const app = Vue.createApp({
    data() {
        return{
            title: 'Vue Gadget Shop',
            description: 'Découvrez les derniers gadgets électroniques de haute technologie !',
            gadgets: [
                {id: 1, name: 'Smartphone XZ', price: '799$', image: 'assets/phone.jpg', inStock: true},
                {id: 2, name: 'Laptop Pro', price: '1299$', image: 'assets/laptop.jpg', inStock: false},
                {id: 3, name: 'Earbuds', price: '99.99$', image: 'assets/earbuds.jpg', inStock: true}
            ],
            cart: []
        }
    },
    computed: {
        cartTotal() {
            return this.cart.reduce((total, gadget) => {
                return total + parseFloat(gadget.price.replace('$', ''));
            }, 0).toFixed(2);
        },
        discountedTotal() {
            const discountRate = 0.1; // 10% discount for premium users
            return (this.cartTotal * (1 - discountRate)).toFixed(2);
        }
    },
    methods: {
        addToCart(gadget) {
            this.cart.push(gadget);
        },
        removeFromCart(index) {
            this.cart.splice(index, 1);
        }
    }
})