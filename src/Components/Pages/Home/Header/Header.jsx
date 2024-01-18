import { VscAccount } from "react-icons/vsc";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";

const Header = () => {
    return (
        <div>
            <div className="navbar flex justify-between items-center p-4">

                <div className="flex md:order-2">
                    <div className="hamburger inline-block p-4 cursor-pointer md:hidden">
                        <div className="line w-6 h-0.5 my-1 bg-black"></div>
                        <div className="line w-6 h-0.5 my-1 bg-black"></div>
                        <div className="line w-6 h-0.5 my-1 bg-black"></div>
                    </div>
                    <div className="search md:hidden"><span><IoSearchOutline /></span></div>
                </div>


                <div className="logo text-center md:order-1 flex items-center gap-7">
                    <div className="h-[40px]"><img className="md:h-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1920px-Microsoft_logo_%282012%29.svg.png" alt="" /></div>

                    <div className="features flex gap-3">
                        <div className="item">Microsoft 365</div>
                        <div className="item">Office</div>
                        <div className="item">Windows</div>
                        <div className="item">Surface</div>
                        <div className="item">Suppport</div>

                    </div>
                </div>


                <div className="cart text-center md:order-4 flex gap-4">
                    <div className="search hidden md:block"><span><IoSearchOutline /></span></div>
                    <div><span><BsCart /></span></div>
                    <div className="account md:order-3 "><span><VscAccount /></span></div>

                </div>


            </div>
        </div>
    );
};

export default Header;