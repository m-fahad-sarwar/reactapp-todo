import a from '../../assets/a.png'
// import b from '../../assets/b)'
// import c from '../../assets/e)'
// import d from '../../assets/d)'
// import e from '../../assets/e)'
// import f from '../../assets/f'
        
    
    
    const Services = (prop) =>{
        return(
        
    <div className="text-center border">
        <img src={prop.src} alt={prop.alt}className="services"  />
            <p>{prop.text}</p>
        </div>
    )
}

export default Services;