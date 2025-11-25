app.component('gadget-display', {
    props: ['gadget'],
    template:
    /*html*/
    `<div class="gadget">
        <div class="gadget-image">
            <img :src="gadget.image" :alt="gadget.name" />
        </div>
        <h2>{{ gadget.name }}</h2>
        <p class="price">{{ gadget.price }}$</p>
        <p :class="gadget.inStock ? 'in-stock' : 'out-of-stock'">
            {{ gadget.inStock ? '✅ En Stock' : '❌ En rupture de Stock' }}
        </p>
        <button :disabled="!gadget.inStock" @click="addToCart(gadget)">
            Ajouter au Panier
        </button>
    </div>`,
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.gadget);
        },
        removeFromCart(index) {
            this.$emit('remove-from-cart', index);
        }
    }
});