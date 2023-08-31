const loadPhTube = async () =>{
    const res = await fetch(' https://openapi.programming-hero.com/api/videos/categories');
    const data =await res.json();
    const categories = data.data;
    displayAllCategory(categories);
}
loadPhTube();
const displayAllCategory = (categories) =>{
    const itemContainer = document.getElementById('item-container');
    categories.forEach(category => {
        // console.log(category);
        const div =document.createElement('div');
    div.innerHTML =`
    <button onclick="handleBtn('${category.category_id}')" class="btn">${category.category}</button>
    `;
    itemContainer.appendChild(div);
    });
}

const handleBtn =async (id) =>{
    // console.log(id);
   const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
   const data =await res.json();
//    console.log(data);
   const all =data.data;
//    console.log(all);
   const cardContainer = document.getElementById('card-container');
   cardContainer.textContent ='';
   all.forEach(card => {
    console.log(card);
    const cardDiv =document.createElement('div');
    cardDiv.classList='card bg-gray-100 shadow-xl'
    cardDiv.innerHTML =`
    <figure class="h-50"><img src="${card?.thumbnail
    }" alt="" /></figure>
                    <div class="card-body">
                    <div class="flex">
                    <figure class="w-10 h-10 rounded-full"><img src="${card?.authors[0]?.profile_picture
                    }" alt="" /></figure>
                      <h2 class="card-title">${card?.title}</h2>
                    </div>
                    <div class="flex">
                    <h4>${card.authors[0].profile_name}</h4>
                    <p>${card.authors[0].verified
                    }</p>
                    </div>
                    <p>${card.others.views
                    } views</p>
                     
    `;
    cardContainer.appendChild(cardDiv)
   });
}
