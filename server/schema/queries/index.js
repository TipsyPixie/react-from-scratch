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
    },
    webpage: {
      type: GraphQLString,
      description: 'A webpage of the gadget'
    },
    community: {
      type: GraphQLString,
      description: 'Communication channels, e.g. social media'
    },
    description: {
      type: GraphQLString,
      description: 'Description of the gadget'
    },
    image_url: {
      type: GraphQLString,
      description: 'URL of the representative image file'
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
      resolve: async () => (await Gadget.fetchAll()).toJSON()
    }
  }
});
