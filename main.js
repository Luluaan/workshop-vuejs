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
      };
    },
  });