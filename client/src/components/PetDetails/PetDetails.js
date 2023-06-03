import { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom';

import * as petService from '../../services/petService';

const PetDetails = ()=>{
    const params = useParams();
    // console.log('Pet ID');
    // console.log(params.petId);
    let [pet,setPet] = useState({});
    useEffect(()=>{
        petService.getOne(params.petId)
        .then(res=>setPet(res));
    }, [params]);

    return (
        <section className="detailsOtherPet">
                <h3>{pet.name}</h3>
                <p>Pet counter: {pet.likes} <a href="#"><button className="button"><i className="fas fa-heart"></i>
                            Pet</button></a>
                </p>
                <p className="img"><img src={pet.imageURL}/></p>
				<p className="description">{pet.description}</p>
                <div class="pet-info">
                    <Link to={`/pets/details/${pet.id}/edit`}><button class="button">Edit</button></Link>
                    <Link to="#"><button class="button">Delete</button></Link>
                </div>
            </section>
    );
}

export default PetDetails;