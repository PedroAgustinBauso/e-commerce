import { Button } from "@mui/material";
import { Typography } from '@mui/material';

function Item({ item }) {
  return (
    <>
      <div>
        <h1 
          style={{
            position: "absolute",
            paddingLeft: "30px",
            fontSize: "clamp(1.5rem, 2.7vw + 0.3rem, 2rem)",
            paddingTop:"4%",
            color: "white",
            textShadow:
              "0 1px 0px #378ab4, 1px 0 0px #5dabcd, 1px 2px 1px #378ab4, 2px 1px 1px #5dabcd, 2px 3px 2px #378ab4, 3px 2px 2px #5dabcd, 3px 4px 2px #378ab4, 4px 3px 3px #5dabcd, 4px 5px 3px #378ab4, 5px 4px 2px #5dabcd, 5px 6px 2px #378ab4, 6px 5px 2px #5dabcd, 6px 7px 1px #378ab4, 7px 6px 1px #5dabcd, 7px 8px 0px #378ab4, 8px 7px 0px #5dabcd",
          }}
        >
          Hola, Somos BBT-TODO. <br />
          Buscamos brindarte las mejores bebidas para que puedas disfrutar junto
          a tus amigos <br />y pasar un buen momento compartiendo anécdotas y
          risas.
        </h1>
        <img
          src={item.images}
          alt=""
          style={{
            objectFit: "cover",
            width: "100%",
            height:"50vh"
            //objectPosition: "0 -300px",
          }}
        />
      </div>
      <Button className="CheckButton"></Button>
    </>
  );
}

export default Item;