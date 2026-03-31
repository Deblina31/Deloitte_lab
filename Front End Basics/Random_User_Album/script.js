const api_url = 'https://randomuser.me/api/?results=3'

async function getUser(){
    const response = await fetch(api_url);
    const data = await response.json();

    const users = data.results;

    const cardContainer = document.getElementById('cardContainer');

    // Clear previous cards (if any)
    cardContainer.innerHTML = "";

    users.forEach(user => {

        let { title, first, last } = user.name;
        let { email } = user;
        let { city, state, country } = user.location;
        let { medium } = user.picture;

        let fullname = `${title}. ${first} ${last}`;

        // Create column (Bootstrap grid)
        const col = document.createElement('div');
        col.className = "col-md-4 mb-4";

        // Create card
        col.innerHTML = `
            <div class="card h-100">
                <img src="${medium}" class="card-img-top" alt="user image">
                <div class="card-body">
                    <h5 class="card-title">${fullname}</h5>
                    <p class="card-text">
                        <strong>Email:</strong> ${email} <br>
                        <strong>Location:</strong> ${city}, ${state}, ${country}
                    </p>
                </div>
            </div>
        `;

        cardContainer.appendChild(col);
    });
}
