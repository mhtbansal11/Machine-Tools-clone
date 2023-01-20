import React from 'react'
import styles from "./Sidebar2_P.module.css"


const Sidebar2_P = () => {
  const Searchurl = "https://static3.industrybuying.com/static/svg/search-icon.svg?de0f06193896";
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
        <h3 id={styles.brand_heading}><b>BRANDS</b></h3>
        <div className={styles.input_container}>
            <input type="text" placeholder='Search by Brands' />
            <img src={Searchurl} alt="search" />
        </div>
        <div className={styles.brandSearch}>
            <div>
              <input type="Checkbox"/>
              <p>AgriPro</p>
            </div>
            <div>
              <input type="Checkbox"/>
              <p>Confider</p>
            </div>
            <div>
              <input type="Checkbox"/>
              <p>Raja</p>
            </div>
            <div>
              <input type="Checkbox"/>
              <p>Rico Italy</p>
            </div>
            <div>
              <input type="Checkbox"/>
              <p>ISANKRAFT</p>
            </div>
            <div>
              <input type="Checkbox"/>
              <p>agrOMILL</p>
            </div>
            <div>
              <input type="Checkbox"/>
              <p>Sparrow</p>
            </div>
            <div>
              <input type="Checkbox"/>
              <p>Krost</p>
            </div>
            <div>
              <input type="Checkbox"/>
              <p>FALCON</p>
            </div>
        </div>


    </div>
  )
}

export default Sidebar2_P