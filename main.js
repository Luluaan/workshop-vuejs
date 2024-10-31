const app = Vue.createApp({
    data: function () {
      return {
        title: 'Achat de café Nespresso',
        description: "C'est pour acheter du café du coup",
        image: 'assets/images/colombia.png',
        link: 'https://questionmarc.k8s.ing.he-arc.ch/',
        inStock: true,
        stock: 5,
        onSale: false,
        details: ['Doux', 'Harmonieux'],
        carouselImages: [
            {
              id: 1,
              text: 'Capsule 1',
            },
            {
              id: 2,
              text: 'Capsule 2',
            },
            {
              id: 3,
              text: 'Tasse',
            },
            {
              id: 4,
              text: 'Paquet',
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
      };
    },
  });