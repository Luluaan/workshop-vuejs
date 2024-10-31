const app = Vue.createApp({
    data: function () {
      return {
        action:  'Achat de café',
        brand:  'Nespresso',
        link: 'https://questionmarc.k8s.ing.he-arc.ch/',
        stock: 0,
        cart: 0,
        styles: {
            roundButton: {
                borderRadius: '20px',
                padding: '10px',
                backgroundColor: 'rgb(0, 114, 180)',
                color: 'white',
                cursor: 'pointer'
                }
        },
        premium: true,
      };
    },
    methods: {
        addToCart: function() {
            this.cart += 1;
          },
        removeToCart: function() {
            if (this.cart > 0)
            this.cart -= 1;
        },
    },
    computed: {
        title() {
            return this.action + ' ' + this.brand
        },
        stockEmpty() {
            return this.stock <= 0
        }
    },
});