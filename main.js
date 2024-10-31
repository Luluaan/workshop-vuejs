const app = Vue.createApp({
    data: function () {
      return {
        title: 'Achat de café Nespresso',
        description: "C'est pour acheter du café du coup",
        image: 'assets/images/colombia.png',
        link: 'https://questionmarc.k8s.ing.he-arc.ch/',
        inStock: true,
        stock: 0,
        onSale: false,
        details: [
            {
            id: 1,
            text: 'Doux',
            color: '#6C99C6'
            },
            {
            id: 2,
            text: 'Harmonieux',
            color: '#BF9E74'
            }
        ],
        carouselImages: [
            {
                id: 1,
                text: 'Capsule 1',
                image: './assets/images/colombia.png',
              },
              {
                id:  2,
                text: 'Capsule 2',
                image: './assets/images/colombia_de_cote.png',
              },
              {
                id: 3,
                text: 'Tasse',
                image: './assets/images/colombia_tasse.png',
              },
              {
                id: 4,
                text: 'Paquet',
                image: './assets/images/colombia_paquet.png',
              }
          ],
          paquets: [
            {
              id: 1,
              quantity: 2,
              price: 5
            },
            {
              id: 2,
              quantity: 10,
              price: 34
            },
            {
              id: 3,
              quantity: 1,
              price: 3
            }
          ],
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
        updateImage: function(path) {
        this.image = path
        }
    }
  });