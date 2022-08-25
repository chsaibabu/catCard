console.log('Hello!');

const apiSuccess = (apiResponse) => {
  return apiResponse.json();
};

const bootstrapCatCard = (item) => {
  const bootstrapCard = document.createElement('div');
  bootstrapCard.setAttribute('class', 'card');

  bootstrapCard.innerHTML = `
        <img src="${item.image?.url}" class="card-img-top" />
        <div class="card-body">
          <h5 class="">${item.name}</h5>
          <h2>${item.id}</h2>
    <p>${item.adaptability}</p>
     <p>${item.country_code}</p>
        </div>
    `;

  document.querySelector('.ui-container').appendChild(bootstrapCard);
};

const onDataReceived = (data = []) => {
  console.log(':: onDataReceived ::', data);
  data.forEach(bootstrapCatCard);
};

fetch(`https://api.thecatapi.com/v1/breeds`)
  .then(apiSuccess)
  .then(onDataReceived);
