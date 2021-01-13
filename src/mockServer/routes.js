import faker from 'faker';
const fakeData = {
  id(i) {
    return i + 1;
  },
  shop() {
    return {
      name: faker.company.companyName(),
      address: faker.address.streetAddress(),
    };
  },
  title: faker.commerce.productName(),
  price: Math.floor(Math.random() * (5000 - 100)),
  description: faker.lorem.paragraphs(),
  rating: 3,
  reviews: function reviews() {
    return {
      reviewers: [
        {
          name: faker.name.findName(),
          comment: faker.lorem.paragraph(),
          ratingGiven: 4,
        },
        {
          name: faker.name.findName(),
          comment: faker.lorem.paragraph(),
          ratingGiven: 4,
        },
        {
          name: faker.name.findName(),
          comment: faker.lorem.paragraph(),
          ratingGiven: 4,
        },
        {
          name: faker.name.findName(),
          comment: faker.lorem.paragraph(),
          ratingGiven: 4,
        },
      ],
      reviewerCount: Math.floor(Math.random() * (50 - 10)),
    };
  },
  preview: faker.image.fashion(),
  images: [
    {
      source: {
        uri: faker.image.abstract(),
      },
    },
    {
      source: {
        uri: faker.image.nature(),
      },
    },
    {
      source: {
        uri: faker.image.transport(),
      },
    },
    {
      source: {
        uri: faker.image.technics(),
      },
    },
  ],
};

export default (server, Response) => {
  // ---- TEST
  server.get(
    '/api/shoppingdata',
    (schema) => {
      const data = schema.destinations.all().models;

      return new Response(200, {}, data);
    },
    {timing: 500},
  );

  server.get('/api/shoppingdata/category/Electronic', () => [
    fakeData,
    fakeData,
    fakeData,
  ]);
  server.get('/api/shoppingdata/category/Mobile', () => [
    fakeData,
    fakeData,
    fakeData,
  ]);
  server.get('/api/shoppingdata/category/Jewelery', () => [
    fakeData,
    fakeData,
    fakeData,
  ]);
};
