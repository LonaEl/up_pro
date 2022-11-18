import axios from 'axios';

// Anonymous test key. Replace with your key.
const SECRET_KEY = 'sk_test_960bfde0VBrLlpK098e4ffeb53e1'

axios.post(
  'https://online.yoco.com/v1/charges/',
  {
    token: 'tok_test_DjaqoUgmzwYkwesr3euMxyUV4g',
    amountInCents: 2799,
    currency: 'ZAR',
  },
  {
    headers: {
      'X-Auth-Secret-Key': SECRET_KEY,
    },
  },
)
.then((res) => res.json())
.then((data) => {

})
.catch(error => {
  // handle errors
})

/* {
  "source": {
      "id": "card_Aj9RzUkGWYKDaMt0M1s5XbC2zA",
      "brand": "visa",
      "maskedCard": "**** **** **** 4242",
      "expiryMonth": 4,
      "expiryYear": 2024,
      "fingerprint": "09634a43594b4af0eae0a74be89df8545b29af0d",
      "object": "card",
      "country": "GB"
  },
  "object": "charge",
  "id": "ch_awLYujNDMwzorIBO1iQkrikLq",
  "status": "successful",
  "currency": "ZAR",
  "amountInCents": 2799,
  "liveMode": false,
  "metadata": {"your metadata object":"that you sent us"}
} */