import {useState} from 'react';

function useForm(callback , iniData){

const [formData , setForm] = useState(iniData || {});

function updateForm(key , value){
  let newFormData = {...formData};
  newFormData[key] = value;
  setForm(newFormData);
}
function submitHandler(e){
  e.preventDefault();

  callback(formData);
}

return [updateForm , submitHandler,formData];
}

export default useForm;