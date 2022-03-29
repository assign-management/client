import { gql } from '@apollo/client';

export const REGISTRATION = gql`
  mutation Registration($email: String, $password: String, $name: String) {
    registration(email: $email, password: $password, name: $name) {
      id
      email
      name
      token
    }
  }
`;
