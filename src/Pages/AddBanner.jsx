import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify.js";
import { createApiData } from "../utiils";
import { warnToast } from "../Components/Toast";
import { useNavigate } from "react-router-dom";

const AddBanner = () => {

  const [banner , setBanner] = useState({
    title:"",
    description:"", 
    validFrom:"",
    validTo:"",
    image:"",
  })

  const [bannerImage, setBannerImage] = useState(null);

  const navigate = useNavigate()

  const fileInputRef = useRef(null);

  const handleChangeBanner = (e) => {
    const { name, value } = e.target;
    setBanner((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  };

  console.log(banner)

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setBanner((prevData) => ({
      ...prevData,
      image: file,
    }));
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const handleBannerSubmit = async(e)=>{
    e.preventDefault()

    if(!banner?.title || !banner?.description || !banner?.validFrom || !banner?.validTo || !banner?.image){
        return  warnToast("Please Fill All The Fields")
    }
    const data = new FormData();
    data.append('title', banner?.title);
    data.append('description', banner?.description);
    data.append('validFrom', banner?.validFrom);
    data.append('validTo', banner?.validTo);
    data.append('image', banner?.image);

    try {
      const response = await createApiData("https://muvit-project.vercel.app/api/v1/admin/banner", data)
      console.log(response)
      setBanner({
        title:"",
        description:"", 
        validFrom:"",
        validTo:"",
        image:"",
        })
        navigate('/promotions')
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
           Create Banner
          </p>
        </div>
        <div>
            <Form onSubmit={handleBannerSubmit} className="promotion_container_form">
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" name="title" value={banner?.title} onChange={handleChangeBanner} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" name="description" value={banner?.description} onChange={handleChangeBanner} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Banner</Form.Label>
                <div
                  className="promotion_container_bannerImage"
                  onClick={() => fileInputRef.current.click()}
                  style={{ cursor: "pointer" }}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                  {bannerImage ? (
                    <img
                      src={bannerImage}
                      alt="Banner Preview"
                      className="banner-preview"
                    />
                  ) : (
                    <>
                      <Icon
                        icon="solar:upload-line-duotone"
                        width="2.2rem"
                        height="2.2rem"
                        style={{ color: "#202224" }}
                      />
                      <p>Upload Banner</p>
                    </>
                  )}
                </div>
              </Form.Group>
              <div className="promotion_container_split_grid">
                <Form.Group>
                  <Form.Label>Publish date</Form.Label>
                  <Form.Control type="date" name="validFrom" value={banner?.validFrom} onChange={handleChangeBanner}/>
                </Form.Group>
                <Form.Group>
                  {" "}
                  <Form.Label>Expiry date</Form.Label>
                  <Form.Control type="date" name="validTo" value={banner?.validTo} onChange={handleChangeBanner}/>
                </Form.Group>{" "}
              </div>
              <div className="bannerBtn">
                <Button type="submit">Add Banner</Button>
              </div>
            </Form>
         
        </div>
      </div>
    </div>
  );
};

export default AddBanner;
