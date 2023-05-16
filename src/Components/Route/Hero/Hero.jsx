import React from "react";
import styles from "../../../styles/Styles";
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <div
      className={`relative min-h-[90vh] 800px:min-h-[80vh] w-full bg-hero bg-contain ${styles.noramlFlex}`}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Best Collection for <br /> home Decoration
        </h1>
        <p className="pt-5 font-Poppins font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          quae, harum odio nam veritatis tempora nisi nostrum. Est dolore
          delectus enim nihil, molestias vel, sunt neque quidem accusamus totam
          blanditiis.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
               <span className="text-[#fff] font-[Poppins] font-[400] text">
                Shop Now
                </span>   
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
