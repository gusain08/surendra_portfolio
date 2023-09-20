
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
                    <>
  {/* Hello world */}
  <div className="skill-bars">
    
        {   
            skilss.map((items, index)=>{
                return (
                    <>
                        <div className="bar" key={index}>   
                            <div className="info">
                              <span>{items.language}</span>
                            </div>
                            <div className={`progress-line ${items.class}`}>
                              <span />
                            </div>
                          </div>
                    </>
                )
            })
        }
  </div>
</>

              

            </div>
            </div>
        </>
    )
}

export default Skills