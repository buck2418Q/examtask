
import React,{ useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AsyncSelect from 'react-select/async';
import axios from "axios"
function Home() {
    const [items, setItems] = useState([]);
    const [inputValue, setValue] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);
  
    // handle input change event
    const handleInputChange = value => {
      setValue(value);
    };
  
    // handle selection
    const handleChange = value => {
      setSelectedValue(value);
    }
  
    const fetchUsers = () => {
      return  axios.get('http://localhost:9090/state').then(result => {
        const res =  result.data.data;
        return res;
      });
    }
  
  
  return (
    <div className="container">  
      <div className="row">
          <div className="col-md-4"> </div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <AsyncSelect
          cacheOptions
          defaultOptions
          value={selectedValue}
          getOptionLabel={e => e.first_name + ' ' + e.last_name}
          getOptionValue={e => e.id}
          loadOptions={fetchUsers}
          onInputChange={handleInputChange}
          onChange={handleChange}
        />
        </div>
        <div className="col-md-4"></div>
      </div>
      
      <div className="row userDetails">
  
                  
          <div className="col-md-6 img">
            <img src={ selectedValue && selectedValue.avatar } className="img-rounded"/>
          </div>
          
          <div className="col-md-6">
            <blockquote >
              <h5>{ selectedValue && selectedValue.first_name} { selectedValue && selectedValue.last_name}</h5>
              <small><cite title="Source Title">  { selectedValue && selectedValue.email }<i className="icon-map-marker"></i></cite></small>
            </blockquote>		 
          </div>
          
      </div>
    
    </div>
   );
  }
export default Home
