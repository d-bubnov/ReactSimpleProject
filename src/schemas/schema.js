const typeDefinitions  = `
type PhysicalPerson {
    id: ID! # "!" - it denotes a required field
    firstName: String
    lastName: String
    patronymic: String
    phoneNumber: String
    rating: Float
}

type Query {
    physicalPersons: [PhysicalPerson]
}

type Author {
  id: Int! 
  firstName: String
  lastName: String
  posts: [Post] 
}

type Post {
  id: Int!
  tags: [String]
  title: String
  text: String
  views: Int
  author: Author
}

type RootQuery {
  author(firstName: String, lastName: String): Author
  fortuneCookie: String
}

type RootMutation {
  createAuthor(
    firstName: String!
    lastName: String!
  ): Author
  createPost(
    tags: [String!]!
    title: String!
    text: String!
    authorId: Int!
  ): Post
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`;

export default [typeDefinitions];