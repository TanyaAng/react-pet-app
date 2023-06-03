import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';


import * as petService from '../../services/petService';
import InputError from '../Shared/InputError';

const PetEdit = () => {
    const history = useNavigate();

    const [pet, setPet] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const params = useParams();

    const petId = params.petId

    useEffect(()=>{
        petService.getOne(petId)
        .then(res=>setPet(res));
    },[]);

    const onChangeDescriptionHandler= (e)=>{
        e.preventDefault();
        let updatedPet = {...pet, description: e.target.description.value};
        petService.update(petId, updatedPet)
        .then(()=>
        history(`/pets/details/${petId}`)
        );
        return;
    }

    const onDescriptionChangeHandler = (e) => {
        console.log(e.target.value);
        if (e.target.value.length<10){
            setErrorMessage('Description too short');
        } else{
            setErrorMessage('');
        }
    }

    return(
    <section class="detailsMyPet">
    <h3>{pet.name}</h3>
    <p>Pet counter: <i className="fas fa-heart"></i> {pet.likes}</p>
    <p className="img"><img src={pet.imageURL}/></p>
    <form 
        onSubmit={onChangeDescriptionHandler}
    >
        <textarea type="text" name="description" onBlur ={onDescriptionChangeHandler} defaultValue={pet.description}></textarea>
        <InputError>{errorMessage}</InputError>
        <button className="button"> Save</button>
    </form>
</section>
);
}

export default PetEdit;