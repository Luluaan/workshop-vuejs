const app = Vue.createApp({
    data: function () {
      return {
        action:  'Achat de café',
        brand:  'Nespresso',
        link: 'https://questionmarc.k8s.ing.he-arc.ch/',
        cart: [],
        premium: true,
      };
    },
    methods: {
        addCart(id) {
            this.cart.push(id)
        },
        removeCart(id) {
            if (this.cart.length > 0)
                this.cart.splice(this.cart.indexOf(id), 1)
        }
    },
    computed: {
        title() {
            return this.action + ' ' + this.brand
        },
    },
});