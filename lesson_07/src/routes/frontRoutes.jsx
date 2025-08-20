export const frontRoutes = {
   navigate: {
      home: '/',
      about: '/about',
      products: {
         index: '/products',
         category: (c) => `/products/${c}`,
         detail: (c, id) => `/products/${c}/${id}`,
      },
      contacts: '/contact',
   }
};