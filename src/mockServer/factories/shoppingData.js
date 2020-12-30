import {Factory} from 'miragejs';
import faker from 'faker';

export default Factory.extend({
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
  description: faker.commerce.productDescription(),
  rating: 3,
  reviews() {
    return {
      reviewerCount: Math.floor(Math.random() * (50 - 10)),
      commentReview: [
        faker.lorem.paragraphs(),
        faker.lorem.paragraphs(),
        faker.lorem.paragraphs(),
        faker.lorem.paragraphs(),
      ],
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
});
