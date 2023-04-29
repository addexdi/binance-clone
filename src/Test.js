import Button from "./Components/Atoms/Button";
import Image from "./Components/Atoms/Image_component";
import Text from "./Components/Atoms/Text_component";
import Display from "./Components/Molecules/Display";
import Dropdown from "./Components/Molecules/Dropdown";
import NavBar from "./Components/Organisms/NavBar";
import Topdisplay from "./Components/Organisms/Head_display";
import LogoType from "./Images/Logotype.jsx";

export default function ComponentTesting() {
  return (
    <div>
        <h1>Component Testing</h1>

        <Image className="image-component" src={<LogoType />}/>

        <Text className="text-component" children='Adam' />

        <Dropdown />

        <Display />

        <NavBar />
        
        <Button children="Ibrahim Adam" className="btn-component" />

        <Topdisplay />


    </div>
  );
}
