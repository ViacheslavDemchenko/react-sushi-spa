// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';

// function Search({cb, catalog = []}) {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [searchResults, setSearchResults] = useState([]);
//     const handleChange = event => {
//         setSearchTerm(event.target.value);
//     };

//     useEffect(() => {
//         const results = catalog.filter(el =>
//             catalog.toLowerCase().includes(searchTerm)
//         );
//         setSearchResults(results);
//     }, [searchTerm]);


//     // const [value = '', setValue] = useState();
//     // const [searchParams, setSearchParams] = useSearchParams();

//     // const handleKey = (e) => {
//     //     if(e.key === 'Enter') {
//     //         handleSubmit();
//     //     }
//     // }

//     // const handleSubmit = () => {
//     //     cb(value);
//     // }

//     return(
//         <div className="row">
//             <div className="input-field col s12 m6">
//                 <input type="text"  
//                     id="search-field"
//                     placeholder="search"
//                     value={searchTerm}
//                     onChange={handleChange}
//                 />
//                 <button 
//                 className="btn" 
//                 style={{
//                     position: "absolute", 
//                     top: 0, 
//                     right: 0
//                 }}
//                     // onClick={handleSubmit}
//                 >
//                     Search
//                 </button>
//             </div>
//         </div>
//     );
// }

// export { Search };