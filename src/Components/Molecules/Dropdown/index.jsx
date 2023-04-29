import * as React from 'react';

const Dropdown = ({labelName, textName }) => {

 const options = [

   { label: 'Fruit', value: 'fruit' },

   { label: 'Vegetable', value: 'vegetable' },

   { label: 'Meat', value: 'meat' },

 ];

 const [value, setValue] = React.useState('fruit');

 const handleChange = (event) => {

   setValue(event.target.value);

 };

 return (

   <div>

     <label>

       {labelName}

       <select value={value} onChange={handleChange}>

         {options.map((option) => (

           <option value={option.value}>{option.label}</option>

         ))}

       </select>

     </label>

    <p>{textName} {value}</p>

   </div>

 );

};

export default Dropdown;