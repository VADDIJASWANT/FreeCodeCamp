import { useEffect, useState , useRef } from 'react'
import '@fortawesome/fontawesome-free/css/all.css';

export default function Categories(props){

    const [sidemenu,setsidemenu] = useState(false);
    const id = props.id;
    const initialName = props.name;
    const [readonly,setreadonly] = useState(true);
    const [categoryName, setCategoryName] = useState(props.name);
    const menuRef = useRef(null);

    function handleInputChange(event) {
        setCategoryName(event.target.value);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidemenu && menuRef.current && !menuRef.current.contains(event.target)) {
            setsidemenu(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidemenu]);

    function expandsidemenu(){
        setsidemenu(true);
    }

    function deleteCategorie(){
        props.setAddCategory(prevCategories => prevCategories.filter(category => category.id !== id));
    }

    function renameCategorie(){
        setreadonly(false);
    }

    function renameConfirm(){
        if (categoryName !== initialName) {
            props.setAddCategory(prevCategories => prevCategories.map(category => {
              if (category.id === id) {
                return { ...category, name: categoryName };
              }
              return category;
            }));
          }
          setreadonly(true);
    }


    return(
        <div ref={menuRef} className="Categorie">
            <input 
            className='category_name' 
            value={categoryName}
            readOnly={readonly}
            onChange={handleInputChange}
            ></input>
            { !sidemenu ? 
            <span onClick={expandsidemenu} title="expand menu" className='fa-solid fa-ellipsis ellipsis_icon'></span>
             : 
             <div>
                <span title="delete" onClick={() => deleteCategorie()} className='fa-solid fa-trash trash_icon'></span>
                {readonly?
                    <span title="Rename" onClick={renameCategorie} className='fa-solid fa-pen-to-square'></span>
                    :
                    <span title="Rename" onClick={renameConfirm} className='fa-solid fa-check'></span>
                }
             </div>
            }

        </div>
    )
}