app.component('cart-display', {
    props: ['cart'],
    template:
    /*html*/
    `<div class="cart">
        <h2>🛒 Mon Panier ({{ cart.length }})</h2>
        <ul>
            <li v-for="(item, index) in cart" :key="index">
                {{ item.name }} - {{ item.price }}
                <button class="remove-btn" @click="removeFromCart(index)">
                    ❌
                </button>
            </li>
        </ul>
        <p v-if="cart.length === 0">Votre panier est vide.</p>

        <h3 v-if="cart.length > 0">
            💰 Total:
            <span>
                <s>{{ cartTotal }}</s> ➝ <strong> {{ discountedTotal }} (-10%) </strong>
            </span>
        </h3>
    </div>`,

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
        removeFromCart(index) {
            this.$emit('remove-from-cart', index);
        }
    }
});