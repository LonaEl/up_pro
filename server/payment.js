import axios from 'axios';

// Anonymous test key. Replace with your key.
const SECRET_KEY = 'sk_test_0c914441mp1Wbb0ab9a47e0b129a'

axios.post(
  'https://online.yoco.com/v1/charges/'
  const { price  } = req.body;
{
    token: 'tok_test_DjaqoUgmzwYkwesr3euMxyUV4g',
    amountInCents: price,
    currency: 'ZAR',
  },
  {
    headers: {
      'X-Auth-Secret-Key': SECRET_KEY,
    },
  },
)
.then(res => {
  // res.status will contain the HTTP status code
  // res.data will contain the response body



})
.catch(error => {
  // handle errors
})