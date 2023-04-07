import { useState } from "react";
import {Form as BForm, Button} from 'react-bootstrap'

function Form(props) {
  const { movieSearch, setMovie } = props;
    // formData is an object
  const [formData, setFormData] = useState({ searchTerm: ""});

  // handle change on the input
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // handle the on submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await movieSearch(formData.searchTerm);
    setMovie(data)
  }

  return (
    <>
      <BForm onSubmit={handleSubmit}>
        <BForm.Group className="mb-3">
        <BForm.Control
        className="mb-3"
          type="text"
          value={formData.searchTerm}
          name="searchTerm"
          placeholder="Search"
          onChange={handleChange}
        />

      
        <Button variant="flat" type="submit">Search</Button>
        </BForm.Group>
      </BForm>
    </>
  );
}
export default Form;