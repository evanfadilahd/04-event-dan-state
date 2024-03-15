import Button_1, { Button_2 } from "./component/button";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <h2>City Quiz</h2>
        <Button_1 />
        <hr></hr>
        <Button_2 messagecontents="This my Message" buttonName="Message" />
      </div>
    </>
  );
}