import {NavLink, useParams} from 'react-router-dom';

const CategoryNagivation = () =>{
    const params= useParams();
    return (
        <nav className="navbar">
            <ul>
                {/* By Default NavLink has a default class .active, so this is not necessary */}
                <li><NavLink to="/categories/all" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}>All</NavLink></li>
                <li><NavLink to="/categories/Cat">Cats</NavLink></li>
                <li><NavLink to="/categories/Dog">Dogs</NavLink></li>
                <li><NavLink to="/categories/Parrot">Parrots</NavLink></li>
                <li><NavLink to="/categories/Reptile">Reptiles</NavLink></li>
                <li><NavLink to="/categories/Other">Other</NavLink></li>
            </ul>
            <style jsx>{`
            .navbar a.active{
                background-color: green !important;
            }
            `}</style>
        </nav>
    );

    
}

export default CategoryNagivation;