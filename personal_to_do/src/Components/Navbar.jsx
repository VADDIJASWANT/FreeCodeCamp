import {nanoid} from 'nanoid';
import { useEffect, useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
export default function Navbar(props){

    const [newCategory, setNewCategory] = useState(false)

    function addCategory(){
        setNewCategory(true);
    }

    function addCategoryToList(){
        const input = document.querySelector('.Name_of_category');
        const category = input.value.trim();
        if (category !== '') {
            const id = nanoid();
            props.setAddCategory(prevCategories => [...prevCategories, { id:id, name :category}]);
            input.value = '';           
        }
        setNewCategory(false);
    }

    return(
        <div>
            <div className="Navbar">
                <div className="Navbar-heading">Categories</div>
                <div className="categorie-addition">
                    <span className="fa-solid fa-circle-plus" onClick={addCategory} title="Create New Category"></span>
                </div>
            </div>
            <div className={`new_category ${newCategory ? 'show' : 'hide'}`}>
                <input type="text" className="Name_of_category" placeholder="Enter the Name of Category"></input>
                <button onClick={addCategoryToList} title="To Add Cateogry/To Close the opened window" className='new_Category_button'>ADD</button>
            </div>
        </div>
    )
}