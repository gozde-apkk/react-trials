import { Link } from "react-router-dom";

/***
 * const activeNavLink = {
 * color: "primary",
 * position: "absolute"}
 * 
 * <NavLink classname = {({isActive}) => "side-menu-link" + (isActive ? "active": "")}
 * 
 */


const SideMenu = () => {
    return (
        <div>
        <h3>Menu</h3>
        <ul>
            <li><Link to="/"> Anasayfa</Link></li>
            <li><Link to="/products"> Ürünler</Link></li>
            <li><Link to="/"> Sayfam</Link></li>
            <li><Link to="/"> İletişim</Link></li>
            <li><Link to="/counter"> Sayac</Link></li>
            <li><Link to="/product-page"> Ürün Detayı</Link></li>
           
        </ul>
    </div>
    );
}

export default SideMenu;