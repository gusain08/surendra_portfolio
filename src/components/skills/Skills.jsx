
import './skill.css';
const Skills = () => {

    const skilss = [
        {
            language:"HTML",
            class:"html"
        },
        {
            language:" CSS",
            class:"css"
        },
        {
            language:"javaScript",
            class:"jquery"
        },
        {
            language:"jquery",
            class:"jquery"
        },
        {
            language:"Bootstap 5",
            class:"Bootstap"
        },
        {
            language:"React js",
            class:"react"
        },
        {
            language:"Redux RTK",
            class:"rtk-query"
        },
        {
            language:"Java + DSA",
            class:"java"
        }
    ]

    return (
        <>
            <div className="skills_section">
            <div className="container">
                <div className="seven">
                    <h1>My Tech Skills</h1>
                    </div>
                   

  <div className="skill-bars">
    
        {   
            skilss.map((items, indexx)=>{
                return (
                  
                        <div className="bar" key={indexx}>   
                            <div className="info">
                              <span>{items.language}</span>
                            </div>
                            <div className={`progress-line ${items.class}`}>
                            <span></span>
                            </div>
                          </div>
                    
                )
            })
        }
  </div>


              

            </div>
            </div>
     </> 
    )

}

export default Skills