import { mergeResolvers } from 'merge-graphql-schemas';

import User from './User/index';

const resolvers = [User];

export default mergeResolvers(resolvers);