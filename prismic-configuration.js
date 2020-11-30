import Prismic from 'prismic-javascript'

export const apiEndpoint = process.env.NEXT_PUBLIC_PRISMIC_URL
export const accessToken = process.env.NEXT_PUBIC_PRISMIC_TOKEN

// Client method to query documents from the Prismic repo
export const client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}
