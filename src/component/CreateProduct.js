import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button, FormFeedback } from "reactstrap";
import { useNavigate } from "react-router-dom";
import* as Yup from "yup"; 

const CreateProduct = () => {

    //Data Definition : state, local, prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState("");
  const nav = useNavigate();
  const [dropdownOpen , setDropdownOpen] = useState(false);
  const [product, setProduct] = useState({
    name : "",
    img:"",
    description:"",
    price:0,
    stock:0,
  })



  const formSchema = Yup.object().shape({
    name : Yup.string().required("Ürün isim alanı zorunludur!")
    .min(6,"Ürün ismi en az 6 karakter olmalıdır..."),
    img : Yup.string().min(6, "Görsel URL linki en az  6 karakter zorunludur").url("Lütfen geçerli bir Url giriniz.."),
    description : Yup.string(),
    price : Yup.number()
    .required("Ücret bilgisi zorunludur!")
    .typeError("Lütfen nümeric data giriniz...")
    .positive("pozitif değer olmalı"),
    stock : Yup.number().min(0, "Stok bilgisi o'dan az olamaz.."),
    type : Yup.string(),
  });

  //hata mesajları oluşturulacak
  const [formErrors , setFormErrors] = useState({
    name : "",
    img:"",
    description:"",
    price:0,
    stock:0,
  });


  //Function
  const inputChangeHandler =(e) => {
    //destructuring
    const {name , value} = e.target;
    //hata mesajını yuptan alma
    setProduct({...product, [name] : value});
    Yup.reach(formSchema, name) 
       .validate(value)
       .then((valid) => {
        setFormErrors({...formErrors, [name]: ""})
    })
       .catch((err) => {
        setFormErrors(({...formErrors, [name]: err.errors[0]}))
       })
  }

  //LifeCycle events
  useEffect(() =>{
    formSchema.isValid(product).then((valid) => {
        if(valid)
          console.log("Form Datası geçerli'");
        else console.warn("Form Datası hatalı", formErrors);
    } );
  }, [product])

  useEffect(() => {
    console.warn("form datası hatalı")
  },[formErrors]);

  //template
  return (
    <div>
      <Form
        onSubmit={(event) => {
          console.log(event);
          event.preventDefault();
          //form dataları

         axios.post("https://652d5562f9afa8ef4b2746d9.mockapi.io", product)
         .then((res) => {
            console.log("yeni product kayıt res > " + res);
            nav("/product")
         });
          setEmail("");
          setPassword("");
          setRemember(false);
        }}
      >
        <FormGroup>
          <Label htmlFor="product-name"> Name </Label>{" "}
          <Input
            id="product-name"
            name="name"
            type="text"
             //  (event) => {setProduct({...product, name : event.target.value})}
            onChange={inputChangeHandler}
            value={product.name}
          />
          {formErrors.name && <FormFeedback>{formErrors.name} </FormFeedback>}

        </FormGroup>
        <FormGroup>
          <Label htmlFor="product-img"> Image </Label>{" "}
          <Input
            id="product-img"
            name="img"
            type="text"
            onChange={(event) => {
                //tek bir obje için
              setProduct({...product, img : event.target.value})
            }}
            value={product.img}
            invalid={formErrors.name}
          />
           {formErrors.img && <FormFeedback>{formErrors.img} </FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="produc-description"> Description </Label>{" "}
          <Input
            id="product-description"
            name="description"
            type="textarea"
            onChange={(event) => {
                //tek bir obje için
              setProduct({...product, description : event.target.value})
            }}
            value={product.description}
            invalid={formErrors.description}
          />
           {formErrors.description && <FormFeedback>{formErrors.description} </FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="produc-price"> Price </Label>{" "}
          <Input
            id="product-price"
            name="price"
            type="textarea"
            onChange={(event) => {
                //tek bir obje için
              setProduct({...product, price : event.target.value})
            }}
            value={product.price}
            invalid={formErrors.price}
          />
           {formErrors.price && <FormFeedback>{formErrors.price} </FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="produc-stock"> Price </Label>{" "}
          <Input
            id="product-stock"
            name="stock"
            type="textarea"
            onChange={(event) => {
                //tek bir obje için
              setProduct({...product, stock : event.target.value})
            }}
            value={product.stock}
            invalid={formErrors.stock}
          />
           {formErrors.stock && <FormFeedback>{formErrors.stock} </FormFeedback>}
        </FormGroup>

        <FormGroup>
    <Label for="product-type">
      Product Type
    </Label>
    <Input
      id="product-type"
      name="type"
      type="select"
      onChange={(event) => {
        //tek bir obje için
      setProduct({...product, type : event.target.value})
    }}
    value={product.type}
    >
      <option value="accesories"> Aksesusar</option>
      <option value="home" >  Ev moblyası</option>
      <option value="tech" >  Teknoloşi </option>
      <option value="kitchenn"> Mutfak</option>
     
    </Input>
  </FormGroup>

        <Button type="submit"> Login </Button>{" "}
      </Form>{" "}
    </div>
  );
};

export default CreateProduct;
