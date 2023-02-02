import React from "react";
import "./Header.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Header() {  
  const cart=useSelector(state => state.cart)
 

  return (
    <div className="header">
      <Link to='/'>
        <img
          className="header__logo"
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUAAAD////39/fz8/N8fHxYWFi3t7fo6Ojc3Nz7+/vt7e2qqqrw8PAYGBggICDW1tbDw8NoaGiKioozMzOjo6OXl5ctLS2xsbFgYGBKSko9PT1RUVEoKCg7Ozvh4eEUFBRycnLOzs6CgoKTk5NEREQNDQ3dtQxkAAAEbklEQVR4nO3c2XqqMBQGUCMqoig4U0egPe//iocZZErAhGC+f130qibZAiF7J+1kAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj9ZLU7/oc/HAXortxbI2sZqJ7qbMnyyBAQsR2frNIZCe0l3pTQuydQchKZCdrkrBE9kLpm5yE9fHQs050YZ00cbO+ibG0LrMfAX04Rt7JUkD7bV75Fcy+5IvDuZNdsfkL58Yp5pX4IuZpw7ET561tEfdIC70+wsDiyquP21u7A1/CcBptZPOJ8bUqNjr0TDprCTCw5tGHx73FDtz6wHKG/3EffqE5j9udz2hPCzC8qz4c1DZ/DjzeUzQdQ4CB40d9LLL4bpxG3UXzRPrmeejfxV/Shjn89QtdTbYQyb53F3bcgPC0pclr0R5Zxu65ALjGH5eSMSX89sgy5l+v5uNvcM550N2wzKe979RN9Ek5j2BuZy/8w8a1qSH2eJaO4ed++Y+5H8ryJrDcdm0znMkkJLxN2paoMa3jwxgtmR5iRtsHy6vD7dRiWJj5bL3AxfZvfgu/57tBjY90e6jCt735T9S4GbkLXQvGYayWa8YFTofkIHxV9F8rcOFqbFG98ZibD35ZEzh6BtUKDROdcUpdS7+EO2osDUymSss2eK6nomNo5/WNkBguQ/PhUyh5In32jpBl6GF9zbgPEEaLZBvhNplZ3UO0KDljVH6SljMl4iJNVGOfV1elht8et9E+iXjh7wxcGa06kfx7fpQyxelPoQDR/TJG0/QIVqQ321zmw9wXHkwv2sk8todI1k15cfwekrGNRvHwF09d15frtGhEC3FaX/yPL7454Mj7O1FCJNqxsm/9SO4Fd/jh9vFLC5EQ+z2HT1dKtqQRd0ZPjIOb1d7fDsH9+jo42ez0lD1wdg7j8tzU9cIWzKpzPUCiu8cWYpEu61RJTz5TclzAnmGNxebSKUZxBx4EOh9X9MhimvTFWl/Ogl6NiyKUPdBPHPaXp0aNc+jjJNzdb7uZv/89ra2m+uPQW9nibHb1GZbxwYbj6Mxri5AjKANzVJdFDn90Tai6/EPGnr1ANVmkOnNNzFPvhVGyrV5E2UPirbo/IHfrnr9tZWH+lYvvNpdyhLKLwdz9lCP8oiIGo/LyTfKukwDlgpUhe3ebv3KeMaIjGJyU126qvS4CpRfGCDctPlU6ICfzOKIoT+UjdJSP8H1ho2SEb+fG1YzwqnyExTPVyiUXiTxRVKwYlcuPrUg+lSjOMo1wqt7aO/bKJtTv20RklIdoST7WJsw222mcKvrKmGzyhF/VEPOXxlfvlrZy02xR9kDEuSa5lKqvjEn2J+rqlWsySYSf/6X0aM0Vf+3n/45CwZpbIo1QtZ3EXLaToWyOcUgPFqm3R5NKV6fqzjVpoqhg8TuRntBQNYXKphqN5z8rGhlL+QjPUYTGNx1p78qJXhhn2cMQ6XzRyerLTu13pnp8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOL8BwQgJeEoWIzuAAAAAElFTkSuQmCC'
        />
      </Link>
      
      <Link to='/NewArrivals'>
      <div className="header__option">
            <span className="header__optionLineOne"><b>New Arrivals</b></span>
          </div>
          </Link>
          <Link to='/Womens'>
          <div className="header__option">
            <span className="header__optionLineOne"><b>Womens</b></span>
          </div>
          </Link>
          <Link to='/Mens'>
          <div className="header__option">
            <span className="header__optionLineOne"><b>Men</b></span>
          </div>
          </Link>
          <Link to='/Collaboration'>
          <div className="header__option">
            <span className="header__optionLineOne"><b>Collaboration</b></span>
          </div>
          </Link>
          <Link to='/Sport'>
          <div className="header__option">
            <span className="header__optionLineOne"><b>Sport</b></span>
          </div>
          </Link>
         
          
      <div className="header__search">
        <input className="header__searchInput" type="text"  />
        <Link to='/Camp'>
        <SearchIcon className='header__searchIcon' />
        </Link>
      </div>
      
        
      <div className="header__nav">
      <Link to='/Myaccount'>
          <div className="header__option">
            <FavoriteBorderIcon  className="care1"></FavoriteBorderIcon>
            <span className="header__optionLineOne"></span>
          </div>
        
          </Link>

            <Link to='/Checkout'>
            <div className="header__option">
            <span className="header__optionLineOne">
            
            <strong className="cad">{cart.cart.length}</strong>
            {console.log(cart)}
            </span>
            <ShoppingCartIcon className="care"></ShoppingCartIcon>
          </div>
          </Link>
          
          <Link to='/login'>
          <div  className="header__optionBasket">
            <Person2OutlinedIcon  className="care2"></Person2OutlinedIcon>
            <span className="header__optionLineTwo header__basketCount">
            </span>
          </div>
          </Link>
      </div>
    </div>
  );
}

export default Header;