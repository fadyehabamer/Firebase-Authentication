const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

sighUp.addEventListener('click', (e) => {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;
}) 