// imported axios library to use for api calls
import axios from 'axios';

// implementation of getData function
async function getData(userId) {
    // call user
    const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
    // call posts of user
    const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    // posts assigned to user variable
    user.posts = posts;

    // returned result
    return user;
}

// exported getData function to call from app js
export default getData;