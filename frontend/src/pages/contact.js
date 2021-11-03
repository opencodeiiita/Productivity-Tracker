import { Typography } from "@material-ui/core";
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import SignUp from "../component/SignUp";
function Contact() {
  return(<>
    <Navbar />
   {/* <Typography>Contact Us page</Typography> */}
    <SignUp/>
   <Footer />
   </>);
}
export default Contact;
