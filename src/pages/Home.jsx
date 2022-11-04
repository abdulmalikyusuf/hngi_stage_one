import React from 'react'
import { Link } from 'react-router-dom'


import ProfilePhoto from "../assets/profile__img.png"

function Home() {
    return (
        <main>
            <div id="header__section" className="flex justify-center relative">
                <div id="profile__section" className="flex flex-col justify-center items-center">
                    <div id="profile__DP" className="relative flex flex-col justify-center items-center group">
                        <a href="" id="image__link" className="group-hover:border-[5.5px] border-[#EBE9FE] rounded-full">
                            <img src={ProfilePhoto} alt="Profile photo" className="profile__img"/>
                        </a>
                        <div id="choose__profile" className="group-hover:block">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 8.37722C2 8.0269 2 7.85174 2.01462 7.70421C2.1556 6.28127 3.28127 5.1556 4.70421 5.01462C4.85174 5 5.03636 5 5.40558 5C5.54785 5 5.61899 5 5.67939 4.99634C6.45061 4.94963 7.12595 4.46288 7.41414 3.746C7.43671 3.68986 7.45781 3.62657 7.5 3.5C7.54219 3.37343 7.56329 3.31014 7.58586 3.254C7.87405 2.53712 8.54939 2.05037 9.32061 2.00366C9.38101 2 9.44772 2 9.58114 2H14.4189C14.5523 2 14.619 2 14.6794 2.00366C15.4506 2.05037 16.126 2.53712 16.4141 3.254C16.4367 3.31014 16.4578 3.37343 16.5 3.5C16.5422 3.62657 16.5633 3.68986 16.5859 3.746C16.874 4.46288 17.5494 4.94963 18.3206 4.99634C18.381 5 18.4521 5 18.5944 5C18.9636 5 19.1483 5 19.2958 5.01462C20.7187 5.1556 21.8444 6.28127 21.9854 7.70421C22 7.85174 22 8.0269 22 8.37722V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V8.37722Z" stroke="#F9FAFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 16.5C14.2091 16.5 16 14.7091 16 12.5C16 10.2909 14.2091 8.5 12 8.5C9.79086 8.5 8 10.2909 8 12.5C8 14.7091 9.79086 16.5 12 16.5Z" stroke="#F9FAFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className=" font-bold text-[20px] leading-[30px] text-center text-custom-gray-900">
                        <p id="twitter" className="mt-6">_Abdulmalik_Y</p>
                        <p id="slack" className="hidden">ymabdul</p>
                    </div>
                </div>
                <button id="share__btn" className="share__btn">
                    {/* //h-10 w-10 rounded-full border-dashed border-[1.67px] border-custom-gray-400 flex items-center justify-center hover:bg-custom-gray-50 focus:bg-white focus:border focus:border-custom-gray-300 disabled:bg-custom-gray-50 disabled:border disabled:border-custom-gray-200 */}
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.3261 8.50617C16.5296 8.3318 16.6313 8.24461 16.6686 8.14086C16.7013 8.0498 16.7013 7.9502 16.6686 7.85914C16.6313 7.75539 16.5296 7.6682 16.3261 7.49383L9.26719 1.44331C8.917 1.14315 8.74191 0.993063 8.59367 0.989386C8.46483 0.986191 8.34177 1.04279 8.26035 1.14269C8.16667 1.25764 8.16667 1.48825 8.16667 1.94948V5.52886C6.38777 5.84007 4.75966 6.74146 3.54976 8.09489C2.23069 9.57043 1.50103 11.48 1.5 13.4591V13.9691C2.37445 12.9157 3.46626 12.0638 4.70063 11.4716C5.78891 10.9495 6.96535 10.6403 8.16667 10.5588V14.0505C8.16667 14.5117 8.16667 14.7424 8.26035 14.8573C8.34177 14.9572 8.46483 15.0138 8.59367 15.0106C8.74191 15.0069 8.917 14.8569 9.26719 14.5567L16.3261 8.50617Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div id="link_section" className="mt-3 sm:mt-9">
                {/* <a href="https://training.zuri.team/" id='btn__zuri' className="link">Twitter Link</a> */}
                <a href="https://training.zuri.team/" id='btn__zuri' className="py-[25px] border border-custom-gray-200 rounded-[8px] flex flex-col items-center justify-center text-custom-gray-900 text-xl leading-[28px] font-medium bg-custom-gray-200 mb-6">Zuri Team</a>
                <a href="http://books.zuri.team/" id='books' className="py-[25px] border border-custom-gray-200 rounded-[8px] flex flex-col items-center justify-center text-custom-gray-900 text-xl leading-[28px] font-medium bg-custom-gray-200 mb-6">
                    Zuri Books
                    <span className="block font-light text-sm text-center">Have a knack for design? Check out our awesome collection of books on design principles.</span>
                </a>
                <a href="https://books.zuri.team/python-for-beginners?ref_id=ymabdul" id="book__python" className="py-[25px] border border-custom-gray-200 rounded-[8px] flex flex-col items-center justify-center text-custom-gray-900 text-xl leading-[28px] font-medium bg-custom-gray-200 mb-6">
                    Invent Your Own Computer Games with Python, 4th edition
                    <span className="block font-light text-sm text-center">If games are your thing, or you even have a game idea of your own, this would be the perfect book to learn Python. In this book, you learn the fundamentals of programming and Python with the application exercises focused on building classic games.</span>
                </a>
                <a href="https://background.zuri.team" id="pitch" className="py-[25px] border border-custom-gray-200 rounded-[8px] flex flex-col items-center justify-center text-custom-gray-900 text-xl leading-[28px] font-medium bg-custom-gray-200 mb-6">Background Check for Coders
                    <span className="block font-light text-sm text-center">Want to know what type of developer you're hiring? We can help with that</span>
                </a>
                <a href="https://books.zuri.team/design-rules" id='book__design' className="py-[25px] border border-custom-gray-200 rounded-[8px] flex flex-col items-center justify-center text-custom-gray-900 text-xl leading-[28px] font-medium bg-custom-gray-200 mb-6">
                    Design Rules
                    <span className="block font-light text-sm text-center">Learn about the 12 principles of design from our best seller</span>
                </a>
                <Link id="contact" to="/contact" className="py-[25px] border border-custom-gray-200 rounded-[8px] flex flex-col items-center justify-center text-custom-gray-900 text-xl leading-[28px] font-medium bg-custom-gray-200 mb-6">
                    Contact
                </Link>
            </div>
            <div id="social__section" className="flex justify-center items-center py-6 bg-white">
                <button className="bg-transparent mr-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.8752 11.2498C20.9106 11.2498 21.75 10.4104 21.75 9.37496C21.75 8.33952 20.9105 7.50012 19.8751 7.50012C18.8395 7.50012 18 8.33959 18 9.37512V11.2498H19.8752ZM14.625 11.2498C15.6605 11.2498 16.5 10.4103 16.5 9.3748V4.12512C16.5 3.08959 15.6605 2.25012 14.625 2.25012C13.5895 2.25012 12.75 3.08959 12.75 4.12512V9.3748C12.75 10.4103 13.5895 11.2498 14.625 11.2498Z" fill="#2EB67D"/>
                        <path d="M4.12484 12.7502C3.08939 12.7502 2.25 13.5896 2.25 14.625C2.25 15.6605 3.08947 16.4999 4.12492 16.4999C5.16045 16.4999 6 15.6604 6 14.6249V12.7502H4.12484ZM9.375 12.7502C8.33947 12.7502 7.5 13.5897 7.5 14.6252V19.8749C7.5 20.9104 8.33947 21.7499 9.375 21.7499C10.4105 21.7499 11.25 20.9104 11.25 19.8749V14.6252C11.25 13.5897 10.4105 12.7502 9.375 12.7502Z" fill="#E01E5A"/>
                        <path d="M12.7501 19.8752C12.7501 20.9106 13.5895 21.75 14.625 21.75C15.6604 21.75 16.4998 20.9105 16.4998 19.8751C16.4998 18.8395 15.6603 18 14.6248 18L12.7501 18L12.7501 19.8752ZM12.7501 14.625C12.7501 15.6605 13.5896 16.5 14.6251 16.5L19.8748 16.5C20.9103 16.5 21.7498 15.6605 21.7498 14.625C21.7498 13.5895 20.9104 12.75 19.8748 12.75L14.6251 12.75C13.5896 12.75 12.7501 13.5895 12.7501 14.625Z" fill="#ECB22E"/>
                        <path d="M11.2498 4.12484C11.2498 3.08939 10.4104 2.25 9.37496 2.25C8.33952 2.25 7.50012 3.08947 7.50012 4.12492C7.50012 5.16045 8.33959 6 9.37512 6L11.2498 6L11.2498 4.12484ZM11.2498 9.375C11.2498 8.33947 10.4103 7.5 9.3748 7.5L4.12512 7.5C3.08959 7.5 2.25012 8.33947 2.25012 9.375C2.25012 10.4105 3.08959 11.25 4.12512 11.25L9.3748 11.25C10.4103 11.25 11.2498 10.4105 11.2498 9.375Z" fill="#36C5F0"/>
                    </svg>
                </button>
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z" fill="black"/>
                    </svg>
                </button>
            </div>
        </main>
    )
}

export default Home