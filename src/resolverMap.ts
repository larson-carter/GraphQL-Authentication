import { IResolvers } from 'graphql-tools';
import { prependOnceListener } from 'process';

const resolverMap: IResolvers = {

  Query: {

    helloWorld(_: void, args: void): string {

      return `Hello, World!`;

    },

    people: () => people,

  },

};

const people = [
  {
    firstName: 'Larson',
    lastName: 'Carter',
    city: 'Jonesboro',
    state: 'Arkansas',
  },
  {
    firstName: 'Bubba',
    lastName: 'Carter',
    city: 'New Orleans',
    state: 'Louisiana',
  },
]

export default resolverMap;