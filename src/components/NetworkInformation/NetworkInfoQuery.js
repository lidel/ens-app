import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Loader from '../Loader'

export const GET_WEB3 = gql`
  query web3 {
    web3 @client {
      accounts
      network
      block
    }
  }
`

const NetworkInfoQuery = ({ noLoader, children }) => (
  <Query query={GET_WEB3}>
    {({ data, loading, error }) => {
      if (loading) return noLoader ? '' : <Loader />
      const {
        web3: { accounts, network, block }
      } = data
      return children({ accounts, network, block })
    }}
  </Query>
)

export default NetworkInfoQuery
