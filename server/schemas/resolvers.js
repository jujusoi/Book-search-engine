const { User } = require('../models');

const resolvers = {
    Query: {
        user: async (parent, { userId }) => {
            const data = await User.findOne({ _id: userId });
            return data;
          },
    },

    Mutation: {
        saveBook:
    }
};

module.exports = resolvers;