import logo from "./GloboLogo.png";

const Header = () => (

    <header className="row">

       <div className="col-md-5">

           <img src={logo} className="logo" alt="logo" />

           </div>

           <div className="col-mid-7 mt-5 subtitle">

               providing houses all over the world

           </div>  

    </header>

);



export default Header;