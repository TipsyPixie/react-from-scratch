import { Gadget } from '../../database';
import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';

const gadgetType = new GraphQLObjectType({
  name: 'Gadget',
  description: 'Various tools or concepts to help developer',
  fields: {
    name: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The name which this gadget is known as'
    }
  }
});

export default new GraphQLObjectType({
  name: 'Query',
  description: 'Root query type',
  fields: {
    all_gadgets: {
      type: GraphQLList(gadgetType),
      description: 'All the gadgets in the database',
      resolve: async () => {
        const allGadgets = await Gadget.fetchAll();

        return allGadgets.map((gadget) => ({ name: gadget.name }));
      }
    }
  }
});
