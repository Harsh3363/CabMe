import { client } from '../../../lib/sanity'

// just asking userInfo with the wallet address of wallet address they are log-in with from the sanity DB ->

const getUserInfo = async (req, res) => {
  try {
    const query = `
      *[_type == "users" && walletAddress=="${req.query.walletAddress}"]{
          name,
          walletAddress,
          "imageUrl": profileImage.asset->url
        }
    `

    const sanityResponse = await client.fetch(query)

    res.status(200).send({ message: 'success', data: sanityResponse[0] })
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default getUserInfo