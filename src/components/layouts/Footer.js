import '../../styles/footer.css';
import ThemeSwitcher from './ThemeSwitcher';

function Footer(){

    const getToZArinInfo=()=>{
        window.open("https://www.zarinpal.com/trustPage/"+window.location.hostname, null, "width=450, height=600, scrollbars=no, resizable=no");
    }
    return (
        <footer className="footer">
            <div className="container">
            {/* <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} /> */}
                <div className="row mb-0">
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                        <div className="footer-row">
                            <a href="/" className="footer-item text-color">
درباره ی ما و کار ما
                            </a>
                        </div>
                        
                        <div className="footer-row">
                            <a href="/" className="footer-item text-color">
ارسال نظر ، پیشنهاد و یا مشکل
                            </a>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                        <div className="footer-row">
                            <a href="/" className="footer-item text-color">
محصولات پرفروش ما
                            </a>
                        </div>
                        
                        <div className="footer-row">
                            <a href="/" className="footer-item text-color">
جدیدترین طراحی ها و تولیدات
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                        <div className="footer-row"> 
                            

                            <div className="col-6 col-md-6 col-lg-4 column-center text-color start">
                                <ThemeSwitcher />
                                حالت تاریک
                            </div>

                            <div className="col-6 col-md-6 col-lg-8">
                                <div className=" text-color footer-images"  title="دروازه پرداخت معتبر">
                                    <img  onClick={getToZArinInfo}  src="https://cdn.zarinpal.com/badges/trustLogo/1.svg" className=" pointer" border="0" alt="دروازه پرداخت معتبر" />
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='text-color footer-bottom-line' for='App'>
                        <div className=" column-center start pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-mouse" viewBox="0 0 16 16">
                                <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z"/>
                            </svg>
                            <div className=''>
                            برو به بالا
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

    )
}
export default Footer;