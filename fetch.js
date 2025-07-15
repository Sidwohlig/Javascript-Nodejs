fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'ENOIR Dev',
    body: 'This is how we post!',
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => {
    console.log('Created:', data);
  })
  .catch(err => {
    console.error('Error:', err);
  });


  {
    // Fetching data from an API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data fetched successfully:', data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }