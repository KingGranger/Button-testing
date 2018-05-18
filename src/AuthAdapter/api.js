const BaseUrl = 'http://localhost:3000'

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
}

const enterContestant = (first_name, last_name, phone_number, terms_of_agreement) => {
  const newContestant = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({first_name, last_name, phone_number, terms_of_agreement})
  }
  return fetch(`${BaseUrl}/users`, newContestant).then(res => res.json())
}

export default {
  auth: {
    enterContestant
  }
}
