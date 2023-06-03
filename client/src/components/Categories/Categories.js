import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';

import CategoryNagivation from "./CategoryNavigation/CategoryNavigation";
import PetCard from '../PetCard/PetCard';
import * as PetService from '../../services/petService';

const Categories = () => {

    const [pets, setPets]=useState([]);
    const params = useParams();
    console.log("Categories Params");
    console.log(params);

    useEffect(()=>{
        PetService.getAll(params.category)
            .then(pets=>setPets(pets))
    }, []);

    console.log("PETS");
    console.log(pets);
    return (
        <section className="dashboard">
                <h1>Dashboard</h1>
                <CategoryNagivation/>
                <ul className="other-pets-list">
                    {pets.map(x=>
                    <PetCard
                        id={x.id}
                        name={x.name}
                        category={x.category}
                        description={x.description}
                        imageURL={x.imageURL}
                        likes={x.likes}
                    />)}
                </ul>
        </section>
    );
}

export default Categories;