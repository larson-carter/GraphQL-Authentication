import { IResolvers } from 'graphql-tools';
const resolverMap: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
  return `Howdy!`;
    },
  },
};
export default resolverMap;