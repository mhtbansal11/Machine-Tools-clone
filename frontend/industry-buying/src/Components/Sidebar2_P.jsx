import React, {useEffect, useState}from 'react';
import {useSearchParams} from 'react';
import styles from "./Sidebar2_P.module.css";


const Sidebar2_P = () => {
  const Searchurl = "https://static3.industrybuying.com/static/svg/search-icon.svg?de0f06193896";
  const [searchParams, setSearchParams] = useSearchParams();
  // const initialState = searchParams.getAll("category");
  const [category, setCategory] = useState([]);

  // console.log(category);
  console.log(searchParams.getAll("category"));

  const handleFilter = (e) =>{
  let newCategory = [...category]
  //   // if user checks any category it should be store in state
  //   // if the category is already present pop out of the state

    if(newCategory.includes(e.target.value)){
        newCategory.splice(newCategory.indexOf(e.target.value),1)
    }else{
      newCategory.push(e.target.value)
    }
    setCategory(newCategory);
};

  useEffect(()=>{
    const params = {
        category
    }

    setSearchParams(params);

  },[category])


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
              <input type="Checkbox" value='AgriPro' onChange={handleFilter} checked={category.includes("AgriPro")}/>
              <p>AgriPro</p>
            </div>
            <div>
              <input type="Checkbox" value='Confider Rice' onChange={handleFilter} checked={category.includes("Confider Rice")}/>
              <p>Confider Rice</p>
            </div>
            <div>
              <input type="Checkbox" value='Raja' onChange={handleFilter} checked={category.includes("Raja")}/>
              <p>Raja</p>
            </div>
            <div>
              <input type="Checkbox" value='Rico Italy' onChange={handleFilter} checked={category.includes("Rico Italy")}/>
              <p>Rico Italy</p>
            </div>
            <div>
              <input type="Checkbox" value='Kisankraft' onChange={handleFilter} checked={category.includes("Kisankraft")}/>
              <p>Kisankraft</p>
            </div>
            <div>
              <input type="Checkbox" value='agrOMill' onChange={handleFilter} checked={category.includes("agrOMill")}/>
              <p>agrOMILL</p>
            </div>
            <div>
              <input type="Checkbox" value='Sparrow' onChange={handleFilter} checked={category.includes("Sparrow")}/>
              <p>Sparrow</p>
            </div>
            <div>
              <input type="Checkbox" value='Krost' onChange={handleFilter} checked={category.includes("Krost")}/>
              <p>Krost</p>
            </div>
            <div>
              <input type="Checkbox" value='Falcon' onChange={handleFilter} checked={category.includes("Falcon")}/>
              <p>Falcon</p>
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
          <div className={styles.Discount}>
            <div>
                <input type="radio"  name="price"/>
                <p>Low to High</p>
              </div>
              <div>
                <input type="radio"  name="price"/>
                <p>High to Low</p>
             </div>
          </div>
          <div className={styles.dashline}></div>
    </div>
  )
}

export default Sidebar2_P