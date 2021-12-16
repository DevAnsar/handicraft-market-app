import '../../styles/footer.css';
import ThemeSwitcher from './ThemeSwitcher';

function Footer(){

    const getToZArinInfo=()=>{
        window.open("https://www.zarinpal.com/trustPage/"+window.location.hostname, null, "width=450, height=600, scrollbars=no, resizable=no");
    }
    return (
        <footer >
            <div className='footer'>
            <div className="container">
            {/* <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} /> */}
                <div className="row mb-0">
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                        <div className="footer-row">
                            <a href="/" className="footer-item text-color">
                            تماس با ما
                                                        </a>
                        </div>
                        
                        <div className="footer-row">
                            <a href="/" className="footer-item text-color">
                            ارسال پیشنهاد ، نظر و یا نقد
                                                        </a>
                        </div>
                        <div className="footer-row">
                            <a href="/" className="footer-item text-color">
                            نحوه ی ثبت سفارش ، ساخت  و ارسال 
                                                        </a>
                        </div>

                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                        
                        
                        <div className="footer-row">
                            <a href="/" className="footer-item text-color">
                            دسته بندی ها
                                                        </a>
                        </div>
                        
                        <div className="footer-row">
                            <a href="/" className="footer-item text-color">
                            محصولات و تولیدات
                                                                                    </a>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                
                    <div className="col-6 col-sm-6 col-md-4 col-lg-5">
                        <div className="footer-row"> 
                            

                            <div className="col-6 col-md-6 col-lg-4 column-center text-color start">
                                <ThemeSwitcher />
                                حالت تاریک
                            </div>

                            <div className="col-6 col-md-6 col-lg-8">
                                <div className=" text-color footer-images"  title="دروازه پرداخت معتبر">
                                    <img  onClick={getToZArinInfo}  src="https://cdn.zarinpal.com/badges/trustLogo/1.svg" className=" pointer" border="0" alt="دروازه پرداخت معتبر" />
                                    <img  onClick={getToZArinInfo}  src="https://cdn.zarinpal.com/badges/trustLogo/1.svg" className=" pointer" border="0" alt="دروازه پرداخت معتبر" />
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='footer-bottom-line text-color' >
                        <div className=" row-center pointer">
                            
                             ساخته شده با ❤️ توسط

                             {`  `} 
                            <a className='text-color' style={{direction:"ltr"}} href='http://ansarmirzayi.ir' target='_blank'>
                               @DevAnsar
                            </a>
                            {`   `} 
                          
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </footer>

    )
}
export default Footer;