import {useState} from 'react';

function useForm(callback , iniData){

const [formData , setForm] = useState(iniData || {});
function updateForm(key , value){
  let newFormData = {...formData};
  newFormData[key] = value;
  setForm(newFormData);
}
function submit(e){
  e.preventDefault();
  
  callback(formData);
}


return [updateForm , submit,formData];
}


console.log('useform ' , useForm);

export default useForm;
