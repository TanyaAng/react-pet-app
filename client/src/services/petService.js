export const getAll = (category='') => {
    let url = 'http://localhost:5000/pets';
    url+= (category && category!='all')? `?category=${category}` : '';

    return fetch(url)
    .then(res=>res.json())
    .catch(err=> console.log(err));
};

export const getOne = (petId)=>{
    const url = 'http://localhost:5000/pets';
    return fetch(`${url}/${petId}`)
    .then(res=>res.json())
    .catch(err=>console.log(err));
};

export const create = (petName, description, imageURL, category) =>{
    const url = 'http://localhost:5000/pets';
    let pet ={
        name:petName,
        description,
        imageURL,
        category
    }
    return fetch(url,{
        method: "POST",
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pet)
});
};

export const update = (petId, pet) => {
    const url = 'http://localhost:5000/pets';
    return fetch(`${url}/${petId}`,{
        method:"PUT",
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pet)
    });
};

