app.component('product-display', {
    props: {
        premium: {
          type: Boolean,
          required: true,
        },
        stock: {
            type: Number,
            required: true
        },
        stockEmpty: {
            type: Boolean,
            required: true
        }
      },
    template:
    /*html*/
    `
    <p>{{description}}</p>
      <img height="200" :src="image" :class="{imageOpaque: stockEmpty}" />
      <p v-if="inStock">Disponible</p>
      <p v-else>Plus de stock</p>
      
      <p v-if="stock > 10">Disponible</p>
      <p v-else-if="stock <= 10 && stock > 0">Peu de stock</p>
      <p v-else>Plus de stock</p>

      <p v-show="onSale">En vente</p>

      <product-details :details="details"></product-details>

      <p>Shipping: {{ shipping }}</p>

      <div>
        <span
          v-for="(carouselImage, index) in carouselImages"
          :key="carouselImage.id"
          @mouseover="updateImage(index)"
        >
          <img height="50" alt="carouselImage.text" :src="carouselImage.image" />
          {{ carouselImage.text }}
        </span>
      </div>

      <div v-for="paquet in paquets" :key="paquet.id">
        <p>Quantité: {{ paquet.quantity }}</p>
        <p>Prix: {{paquet.price}}</p>
      </div>
    `,
    data() {
      return {
        description: "C'est pour acheter du café du coup",
        selectedImage: 0,
        inStock: true,
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
      }
    },
    methods: {
        updateImage: function(index) {
            this.selectedImage = index
            }
    },
    computed: {
        image() {
            return this.carouselImages[this.selectedImage].image
        },
        shipping() {
            if (this.premium) {
              return 'Free'
            }
          
            return 2.99
          }
    }
});