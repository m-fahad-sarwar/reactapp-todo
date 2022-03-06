import logo from '../../assets/logo.png'
const Logo = () => {
    return(
        <div>
            <img src={logo} alt="" width="30" height="24"/>
            <h5 className='d-inline text-primary fw-bold mx-3'>The box</h5>

        </div>
    )
}
export default Logo;