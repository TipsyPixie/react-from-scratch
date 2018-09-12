import {Gadget} from '../../database';
import {
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

const GadgetType = new GraphQLObjectType({
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
  name: 'Mutation',
  description: 'Root mutation Type',
  fields: {
    add_gadget: {
      type: GraphQLNonNull(GraphQLBoolean),
      description: 'Add a new gadget',
      args: {
        name: {
          type: GraphQLNonNull(GraphQLString),
          description: 'Name of the new gadget'
        }
      },
      resolve: async (obj, { name }, context, info) => {
        const gadgetsWithSameAttributes = await Gadget.query()
          .select('name')
          .where('name', '=', name);

        if (gadgetsWithSameAttributes.length === 0) {
          await Gadget.query()
            .insert({name: name});

          return true;
        }
        else {
          throw Error(`Name ${name} already exists`);
        }
      }
    }
  }
});
