// getData function imported
import getData from './lib/service.js';

// got data of user whose id 1
(async () => {
    // user variable as const
    const user = await getData(1);
    // printed user data to see
    console.log(user)
})();