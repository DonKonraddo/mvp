import { ApolloQueryResult } from '@apollo/client/core/types';
import gql from 'graphql-tag';
import { useEffect } from 'react';

import client from '~/configs/apollo-client';

type Props = {
  name?: string;
};

export const TestComponent = (props: Props) => {
  useEffect(() => {
    (async () => {
      try {
        const data = await client.query<ApolloQueryResult<Props | null>>({
          query: gql`
            query organization {
              organization(id: 1) {
                id
              }
            }
          `,
        });
        console.log('data', data);
      } catch (error) {
        console.error('error', error);
      }
    })();
  }, []);
  return <div>Hello: {props?.name || ''}</div>;
};
