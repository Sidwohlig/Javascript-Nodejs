// promises.js
{
    const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false;
    if (success) {
      resolve("Data loaded");
    } else {
      reject("Error occurred");
    }
  }, 2000);
});

promise
  .then(result => {
    console.log("Success:", result);
  })
  .catch(error => {
    console.error("Failure:", error);
  });

}



// chaining promises
{
  function fetchUser(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: userId, name: "Alice" }), 500);
  });
}

function fetchPosts(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Post 1", "Post 2"]), 500);
  });
}

fetchUser(1)
  .then(user => {
    console.log("User:", user);
    return fetchPosts(user.id); // returns another promise
  })
  .then(posts => {
    console.log("Posts:", posts);
  })
  .catch(err => {
    console.error("Error:", err);
  });

// async-await
 // Async/Await example
  async function fetchData() {
    try {
      const user = await fetchUser(1);
      console.log("User:", user);
      const posts = await fetchPosts(user.id);
      console.log("Posts:", posts);
    } catch (error) {
      console.error("Error:", error);
    }
  }

}

// Chaining after a catch
{
 function doSomething() {
  // Simulate an asynchronous task
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Doing something...");
      resolve();
    }, 1000);
  });
}

{
  const hello = doSomething()
    .then(() => {
      throw new Error("Something failed"); // Simulate a failure
      // console.log("Do this"); // This will never run
    })
    .catch((err) => {
      console.error("Do that"); // This handles the error
    })
    .then(() => {
      console.log("Do this, no matter what happened before");
      return "Finished"; // Value of the final resolved promise
    });

  // `hello` is a Promise — this logs the final result
  hello.then((result) => {
    console.log("Result from final then:", result);
  });
}
 
}
