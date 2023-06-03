import {useNavigate} from 'react-router-dom';
import * as PetService from '../../services/petService';

const PetCreate = () => {
    const history = useNavigate();

    const onCreatePetSubmitHandler =(e) => {
        e.preventDefault();
        const {name,description,imageURL, category} = e.target;
        console.log(name.value);
        console.log(description.value);
        console.log(imageURL.value);
        console.log(category.value);
        PetService.create(name.value, description.value, imageURL.value, category.value)
            .then(()=>{
                history('/');
            })
    }

    return (
        <section class="create">
                <form onSubmit={onCreatePetSubmitHandler}>
                    <fieldset>
                        <legend>Add new Pet</legend>
                        <p className="field">
                            <label for="name">Name</label>
                            <span className="input">
                                <input type="text" name="name" id="name" placeholder="Name" />
                                <span className="actions"></span>
                            </span>
                        </p>
                        <p className="field">
                            <label for="description">Description</label>
                            <span className="input">
                                <textarea rows="4" cols="45" type="text" name="description" id="description"
                                    placeholder="Description"></textarea>
                                <span className="actions"></span>
                            </span>
                        </p>
                        <p className="field">
                            <label for="image">Image</label>
                            <span className="input">
                                <input type="text" name="imageURL" id="image" placeholder="Image" />
                                <span className="actions"></span>
                            </span>
                        </p>
                        <p className="field">
                            <label for="category">Category</label>
                            <span className="input">
                                <select type="text" name="category">
                                    <option value="Cat">Cat</option>
                                    <option value="Dog">Dog</option>
                                    <option value="Parrot">Parrot</option>
                                    <option value="Reptile">Reptile</option>
                                    <option value="Other">Other</option>
                                </select>
                                <span class="actions"></span>
                            </span>
                        </p>
                        <input type="submit" className="button submit"  value="Add Pet" />
                    </fieldset>
                </form>
            </section>
    );
};

export default PetCreate;