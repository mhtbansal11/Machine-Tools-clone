import React, {useEffect, useState}from 'react';
import {useSearchParams} from 'react-router-dom';
import styles from "./Sidebar2_P.module.css";


const Sidebar2_P = () => {
  const Searchurl = "https://static3.industrybuying.com/static/svg/search-icon.svg?de0f06193896";
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("brand");
   const initialOrder = searchParams.get("order")
  const [brand, setBrand] = useState(initialState || []);
  const [order, setOrder] = useState(initialOrder || "");

  const handleFilter = (e) =>{
  let newBrand = [...brand]

    if(newBrand.includes(e.target.value)){
      newBrand.splice(newBrand.indexOf(e.target.value),1)
    }else{
      newBrand.push(e.target.value)
    }
    setBrand(newBrand);
};

  const handleSort = (e)=>{
    setOrder(e.target.value)
  }

  useEffect(()=>{
    const params = {
        brand,
    };
    order && (params.order = order)
    setSearchParams(params);
  },[brand,order])


  return (
    <div id={styles.sidebar_container}>
      <div id={styles.border}>
        <h3><b>CATEGORIES</b></h3>
        <div id={styles.arrow}>
            <p>&#8592;</p>
          <h2>Agriculture Garden & Landscaping</h2>
        </div>
        <h2 id={styles.orrange}><b>Grain Processing Machine</b></h2>
      </div>
      {/* ----------------Brand section--------------- */}
        <h3 id={styles.brand_heading}><b>BRANDS</b></h3>
        <div className={styles.input_container}>
            <input type="text" placeholder='Search by Brands' />
            <img src={Searchurl} alt="search" />
        </div>
        <div className={styles.brandSearch}>
            <div>
              <input type="Checkbox" value='AgriPro' onChange={handleFilter} checked={brand.includes("AgriPro")}/>
              <p>AgriPro</p>
            </div>
            <div>
              <input type="Checkbox" value='Confider Rice' onChange={handleFilter} checked={brand.includes("Confider Rice")}/>
              <p>Confider Rice</p>
            </div>
            <div>
              <input type="Checkbox" value='Raja' onChange={handleFilter} checked={brand.includes("Raja")}/>
              <p>Raja</p>
            </div>
            <div>
              <input type="Checkbox" value='Rico Italy' onChange={handleFilter} checked={brand.includes("Rico Italy")}/>
              <p>Rico Italy</p>
            </div>
            <div>
              <input type="Checkbox" value='Kisankraft' onChange={handleFilter} checked={brand.includes("Kisankraft")}/>
              <p>KISANKRAFT</p>
            </div>
            <div>
              <input type="Checkbox" value='agrOMill' onChange={handleFilter} checked={brand.includes("agrOMill")}/>
              <p>agrOMILL</p>
            </div>
            <div>
              <input type="Checkbox" value='Sparrow' onChange={handleFilter} checked={brand.includes("Sparrow")}/>
              <p>Sparrow</p>
            </div>
            <div>
              <input type="Checkbox" value='Krost' onChange={handleFilter} checked={brand.includes("Krost")}/>
              <p>Krost</p>
            </div>
            <div>
              <input type="Checkbox" value='Falcon' onChange={handleFilter} checked={brand.includes("Falcon")}/>
              <p>FALCON</p>
            </div>
        </div>
        <div className={styles.dashline}></div>

   {/* ----------------discount section--------------- */}
        <h3 id={styles.brand_heading}><b>DISCOUNT</b></h3> 
        <div className={styles.Discount}>
          <div>
              <input type="Checkbox"/>
              <p>Upto 10%</p>
            </div>
            <div>
              <input type="Checkbox"/>
              <p>10% - 20%</p>
            </div>
        </div>
        <div className={styles.dashline}></div>
     {/* ----------------Price section--------------- */}   
      <h3 id={styles.brand_heading}><b>PRICE</b></h3> 
          <div className={styles.Discount} onChange={handleSort}>
            <div>
                <input type="radio"  name="price" value={"asc"} defaultChecked={order === "asc"} />
                <p>Low to High</p>
              </div>
              <div>
                <input type="radio"  name="price" value={"desc"} defaultChecked={order === "desc"} />
                <p>High to Low</p>
             </div>
          </div>
          <div className={styles.dashline}></div>
    </div>
  )
}

export default Sidebar2_P