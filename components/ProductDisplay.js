app.component('product-display', {
    props: {
        premium: {
          type: Boolean,
          required: true,
        },
      },
    emits: ['add-to-cart', 'remove-to-cart'],
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
      <button @click="addToCart" :style="styles.roundButton" :disabled="stockEmpty" :class="{ disabledButton: stockEmpty }">Ajouter au panier</button>
      <button @click="removeToCart" :style="styles.roundButton">Retirer du panier</button>

      <div class="col-6 offset-3">
        <review-form @review-submitted="addReview"></review-form>
      </div>

      <div class="col-6">
        <review-list v-if="this.reviews.length > 0" :reviews="this.reviews"></review-list>
      </div>
    `,
    data() {
      return {
        description: "C'est pour acheter du café du coup",
        selectedImage: 0,
        stock: 1,
        inStock: true,
        onSale: false,
        styles: {
            roundButton: {
                borderRadius: '20px',
                padding: '10px',
                backgroundColor: 'rgb(0, 114, 180)',
                color: 'white',
                cursor: 'pointer'
                }
        },
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
          reviews: [],
      }
    },
    methods: {
        updateImage: function(index) {
            this.selectedImage = index
            },
        addToCart: function() {
            this.$emit('add-to-cart', this.carouselImages[this.selectedImage].id);
            },
        removeToCart: function() {
            this.$emit('remove-to-cart', this.carouselImages[this.selectedImage].id);
        },
        addReview(review) {
          this.reviews.push(review)
        },
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
          },
        stockEmpty() {
            return this.stock <= 0
        }
    }
});