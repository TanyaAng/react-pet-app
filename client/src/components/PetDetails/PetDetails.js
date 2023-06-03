import { useEffect, useState } from 'react';
import * as petService from '../../services/petService';
import {useParams} from 'react-router-dom';

const PetDetails = ()=>{
    const params = useParams();
    console.log('Pet ID');
    console.log(params.petId);
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
            </section>
    );
}

export default PetDetails;