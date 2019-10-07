import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default graphql(
	gql`
		query allRewards($page: Int!, filter: $filters) {
			allRewards(page: $page) {
				name
			}
		}
	`,
	{
		options: () => ({ variables: { page: 0, filters } }),
		props: ({ data = {} }) => ({ allRewards: data.allRewards || [] }),
	},
);
