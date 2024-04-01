"use client";
import Accordion from "./component/accordion";
import Button_1, { Button_2, Button_3 } from "./component/button";
import Form, { Form_2 } from "./component/form";
import Gallery from "./component/gallery";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <h2>City Quiz</h2>
        <Button_1 />
        <hr></hr>
        <Button_2 messagecontents="This my Message" buttonName="Message" />
      </div>
      <br></br>
      <div className="bg-red-300" onClick={() => alert('Parent element : Div')}>
        <Button_3 messagecontents="Child Element : Button-1" buttonName="Button-1" />
        <Button_3 messagecontents="Child Element : Button-2" buttonName="Button-2" />
      </div>
      <br></br>
      <Gallery />
      <br></br>
      <Form />
      <br></br>
      <Form_2 />
      <br></br>
      <Accordion />
    </>
  );
}