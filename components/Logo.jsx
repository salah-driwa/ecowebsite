import { useRive,  Fit, Layout as RiveLayout, } from "@rive-app/react-canvas";
 
const Logo = (props) => {
      const { rive, RiveComponent } = useRive({
        src: "/rive/logo.riv"
        , layout: new RiveLayout({
            fit: Fit.FitHeight,
             }),
        stateMachines: "State Machine 1",
        autoplay: true,
   
     });
 

  return (
    <RiveComponent style={{ height: "60px" , width:"210px",  marginBottom:"10px" }} />
  );

};

export default Logo;
