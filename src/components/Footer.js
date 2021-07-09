import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Image from 'next/image'

function Footer() {
    return (
        <div className='relative h-screen bg-gray-200'>
            <img src="" alt="" sizes="" srcset="" />
            <div className= 'flex items-center '>
                <h2>Location</h2>
                <p>hghjghg</p>
                <p>sfss</p>

            </div>
            <div className= 'flex items-center'>
                <h2>Social media</h2>
                <ul>
                    <FacebookIcon />
                    <InstagramIcon />
                    
                </ul>
            </div>
            <div>
                <h2>About us</h2>
                <p>fafafsafsafafsafasffsafsafafs</p>
            </div>

            <p className="copyright text-muted small mt-5">Sham Dijital Elektronik &copy;  Web Design  2021. All Rights Reserved</p>

            
            
                <WhatsAppIcon className='fixed bottom-5 left-5  cursor-pointer' />
            
        </div>
    )
}

export default Footer