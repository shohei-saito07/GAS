function myFunction22_02_01() {
  const response = UrlFetchApp.fetch('https://tonari-it.com/');
  console.log(response.getResponseCode()); //200

  const headers = response.getHeaders();
  for (const key in headers) console.log(key, headers[key]);

  console.log(response.getContentText());

  console.log(UrlFetchApp.getRequest('https://tonari-it.com'));
}

function myFunction22_02_02() {
  const requests = [
    'https://tonari-it.com',
    {
      url: 'https://tonari-it.com/wp-content/uploads/sea.jpg',
      method: 'get'
    }
  ];

  const responses = UrlFetchApp.fetchAll(requests);
  for (response of responses) console.log(response.getHeaders()['Content-Type']);
}
