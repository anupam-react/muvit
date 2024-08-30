import { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { createApiData, fetchApiData, updateApiData } from "../utiils";
import { warnToast } from "../Components/Toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateFaq = () => {
  const [faq , setFaq] = useState({
    question:"",
    answer:"", 
    userType:"",
 
  })


  const navigate = useNavigate();
  const {id} = useParams()

  async function getSingleFaq() {
    const data = await fetchApiData(
      `https://muvit-project.vercel.app/api/v1/admin/faqs/${id}`
    );
    setFaq(data?.data);
  }

  useEffect(()=>{
    getSingleFaq()
  },[id])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaq((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  };

  const handleFaqSubmit = async(e)=>{
    e.preventDefault()

    const formData ={
      question: faq?.question,
      answer:faq?.answer, 
      userType:faq?.userType
    }
    try {
      const response = await updateApiData(`https://muvit-project.vercel.app/api/v1/admin/faqs/${id}`, formData)
      console.log(response)
      setFaq({
        question:"",
        answer:"", 
        userType:"",})
        navigate("/faq");
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div>
      {" "}
      <div className="promotion_container">
        <div className="promotion_container_split1">
          <p>
            Update Faq 
          </p>
        </div>
        <div>
      
            <Form className="promotion_container_form" onSubmit={handleFaqSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Question</Form.Label>
                <Form.Control type="text" placeholder="Enter Question" name="question" value={faq?.question} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Answer</Form.Label>
                <Form.Control as="textarea"
                type="text"
                rows={3} placeholder="Enter Answer" name="answer" value={faq?.answer} onChange={handleChange}/>
              </Form.Group>
              <Form.Group>
                  <Form.Label>User Type</Form.Label>
                  <Form.Select defaultValue="Choose..." name="userType" value={faq?.userType} onChange={handleChange}>
                    <option selected>Select User Type</option>
                    <option value="ADMIN">ADMIN</option>
                    <option value="USER">USER</option>
                    <option value="PARTNER">PARTNER</option>
                    <option value="SUB-ADMIN">SUB-ADMIN</option>
                  </Form.Select>
                </Form.Group>
         
              <div className="bannerBtn">
                <Button type="submit">Update Faq</Button>
              </div>
            </Form>
        </div>
      </div>
    </div>
  );
};

export default UpdateFaq;
