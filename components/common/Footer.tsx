import Logo from "./Logo"
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaViber, FaFacebookF } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="py-8 px-4 flex flex-col items-center">
            <div className="flex flex-row py-4">
                <Logo />
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-4">
                <div className="flex flex-col gap-4 w-[250px]">
                    <p className="font-semibold">Follow Us</p>
                    <div className="flex flex-row gap-2 justify-between">
                        <span className="p-2 bg-accentRed rounded-full text-white cursor-pointer">
                            <FaFacebookF />
                        </span>
                        <span className="p-2 bg-accentRed rounded-full text-white cursor-pointer">
                            <BsInstagram />
                        </span>
                        <span className="p-2 bg-accentRed rounded-full text-white cursor-pointer">
                            <BsTwitter />
                        </span>
                        <span className="p-2 bg-accentRed rounded-full text-white cursor-pointer">
                            <FaViber />
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-sm w-[250px]">
                    <p className="font-semibold text-base">How To Order</p>
                    <p>View Menu</p>
                    <p>Delivery</p>
                    <p>Multi-Delivery</p>
                    <p>Locations</p>
                </div>
                <div className="flex flex-col gap-2 text-sm w-[250px]">
                    <p className="font-semibold text-base">Promotions</p>
                    <p>Promos</p>
                    <p>Gift Cards</p>
                </div>
                <div className="flex flex-col gap-2 text-sm w-[250px]">
                    <p className="font-semibold text-base">About Us</p>
                    <p>About CheeryBug</p>
                    <p>Safety</p>
                    <p>Investors</p>
                    <p>Franchising</p>
                    <p>Careers</p>
                    <p>CheeryBug Group Foundation</p>
                    <p>Contact Us</p>
                    <p>Rate Our Stores</p>
                </div>
                <div className="flex flex-col gap-2 text-sm w-[250px]">
                    <p className="font-semibold text-base">About Our Website</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Accessibility</p>
                    <p>Sitemap</p>
                </div>
            </div>
        </footer>        
    ) 
}