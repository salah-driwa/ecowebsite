import { Section } from ".";

const Footerlink = ({ product }) => {
    return (
        <Section>
      <div className="flex  flex-wrap justify-around gap-4 m-10 ">
        {product.map((item, index) => (
          <div key={index}>
            
            <h3 className=" text-xl text-light">{item.title}</h3>
            <ul>
            
              {item.content.map((link, index) => (
                <Section delay={0.09 *index} key={index}>
                <li key={index} className="">
                  <a className="text-light font-basicgothic font-thin text-sm "  href={link.link}>{link.label}</a>
                </li>
                </Section>  
                  ))}
               
            </ul>
           
          </div>
        ))}
      </div>
      </Section>
    );
  };
  
   
  export default Footerlink;
  