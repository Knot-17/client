import React,{useState,useEffect,useRef} from 'react';
import { CategoryWrapper,CategoryContainer, ArrowDown, ArrowUp,DropDownContainerL , CameraIcon, GuitarIcon, PlaneIcon, FlowerIcon, SpoonIcon,CloseIcon, DropDownContainer, LocationWrapper,LocationContainer, SearchIcon, SearchButton, LipstickIcon  } from './BeuticiansElements';


const Search = ( {options = []}) => {

   
    const [isDropDownVisible,setIsDropDownVisible] = useState(false);
    const [itemsList,setItemsList]= useState ([
        {   
            icon:<CameraIcon/>,
            name:" Photographers" ,
            value:"Photographers"
        },
        {
            icon:<FlowerIcon/>,
            name:"Decorators",
            value:"Decorators"
        },
        {
            icon:<PlaneIcon/>,
            name:"Destination Planers",
            value:"Destination Planers"
        },
        {   
            icon:<LipstickIcon/>,
            name:"Beuticians",
            value:"Beuticians"
        },
        {
            icon: <GuitarIcon/>,
            name:"Music Bands",
            value:"Music Bands"
        },
        {
            icon:<SpoonIcon/>,
            name:"Caterers",
            value:"Caterers"
        }
    ]);
    const [selectedItemIndex,setSelectedItemIndex] = useState(null);
    

    const [value, setValue] = useState("");
    const [showSuggestions,setShowSuggestions ] = useState(false);

    const suggestions = options.filter(option => option.toLowerCase().includes(value.toLowerCase()));
    

    

    const handleChange = e =>{
        setValue(e.target.value);
    };

    const handleSuggestionsClick = (suggestion) => {
        setValue(suggestion);
        setShowSuggestions(false); 
    };
   
    
    function useOutsideClick1(ref) {
        useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsDropDownVisible(false);
                // setShowSuggestions(false);
            }
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
      }
      function useOutsideClick2(ref) {
        useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                // setIsDropDownVisible(false);
                setShowSuggestions(false);
            }
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
      }
      const autocompleteRef = useRef();
      const categoryRef = useRef();

    useOutsideClick2(autocompleteRef);
    useOutsideClick1(categoryRef);

    return (
        <div >
            <form className='flex w-full min-w-[500px] justify-center'>

            
            <CategoryWrapper ref={categoryRef}
            onClick={e=>{
                isDropDownVisible? setIsDropDownVisible(false) : setIsDropDownVisible(true)
                }}
            
            >
                <CategoryContainer 
                
                >
                    <h3 className=' text-[12px] text-slate-500'>Category</h3>
                    <div className='flex mt-[2px] text-[12px] md:text-[16px]' >
                       {selectedItemIndex !== null ? itemsList[selectedItemIndex].name : "Beuticians"}
                      
                  { isDropDownVisible? <ArrowUp />: <ArrowDown  />} 
                    </div>
                    {/* <div className='flex'><h1>Sandun</h1></div> */}

                </CategoryContainer>
      
              {
                isDropDownVisible ? (  
                    
                   <DropDownContainer>
                     
                {
                itemsList.map((item, index)=>(
                    <div className='h-[30px] border-b-[1px] border-#ccc'>
                        <div key={item.value} className="flex cursor-pointer  mt-1 ml-[10px]   "
onClick={e=>{
setSelectedItemIndex(index);
setIsDropDownVisible(false);
}}
                    >
                    {item.icon}  <div className='ml-[10px]'>{item.name}</div>
                    </div>
                    </div>
                    
                ))
            }
            
                   </DropDownContainer> 
                    
                   ) : <></>
              }
                
            </CategoryWrapper>
            

            <div   ref={autocompleteRef}>
            <LocationWrapper>
                   <LocationContainer>
                <h3 className=' text-[12px] text-slate-500'>Location</h3>
                <div className='flex justify-between'>
                    <input
            value={value}
            onChange = {handleChange}
            placeholder = "Search"
            className=' outline-none  w-[210px] '
            onFocus={() => setShowSuggestions(true)}
              />
              <div className={` ${value!==("") && showSuggestions===true ? 'block':'hidden'}  mr-2 `}
              onClick={()=>setValue("")}
              ><CloseIcon/></div>
              </div>
                </LocationContainer>

               
                      {showSuggestions && (
                        <DropDownContainer>
                             <ul >
                    {suggestions.map(suggestion => (
                       <li
                        onClick={() => handleSuggestionsClick(suggestion)}
                       key={suggestion}
                       className = " mt-[10px] cursor-pointer ml-[10px] "
                       
                       >
                        
                         {suggestion}
                       
                        </li>
                    ))}
                </ul>
                        </DropDownContainer>
               
              )}   
                
                
            </LocationWrapper>
             
            
            
         
        </div>
       <div>
        
        
       </div>

       
        
       <SearchButton><SearchIcon/></SearchButton>
    
        </form>
        </div>
    );
}

export default Search;
