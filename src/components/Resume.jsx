import React from 'react'
import "./resume.css";
const Resume = () => {
  return (
   <>
    <div className="resume-pages">
    <div className="container">
    <div class="seven"><h1>Resume</h1></div>
    <main className="main-content">
  <section className="left-section">
    <div className="left-content">
      <div className="profile">
        <div className="image">
          <img src="/profile.png" alt="" />
        </div>
        <h2 className="name">Surendra Singh</h2>
        <p className="career">Frontend Developer</p>
      </div>
      <div className="contact-info">
        <h3 className="main-title">Contact Info</h3>
        <ul>
          <li>
            <i className="fa fa-phone" />
            +919917315921
          </li>
          <li>
            <i className="fa fa-fax" />
            surrigusain8@gmail.com
          </li>
          <li>
            <i className="fa fa-globe" />
            www.codingmasterweb.com
          </li>
          <li>
            <i className="fa fa-linkedin" />
            Surendra Singh
          </li>
          <li>
            <i className="fa fa-github" />
            @gusain08
          </li>
          <li>
            <i className="fa fa-map-marker" />
            New Delhi
          </li>
        </ul>
      </div>
      <div className="skills-section">
        <h3 className="main-title">Skills</h3>
        <ul>
          <li>
            <p className="skill-title">HTML</p>
            <div className="progress-bar">
              <div className="progress ps-progress" />
            </div>
          </li>
          <li>
            <p className="skill-title">CSS</p>
            <div className="progress-bar">
              <div className="progress ps-progress" />
            </div>
          </li>
          <li>
            <p className="skill-title">Javascript</p>
            <div className="progress-bar">
              <div className="progress js-progress" />
            </div>
          </li>
          <li>
            <p className="skill-title">Bootstrap 5</p>
            <div className="progress-bar">
              <div className="progress ps-progress" />
            </div>
          </li>
          <li>
            <p className="skill-title">Jquery</p>
            <div className="progress-bar">
              <div className="progress n-progress" />
            </div>
          </li>
          <li>
            <p className="skill-title">React JS</p>
            <div className="progress-bar">
              <div className="progress  ,,,.,,,,,,,,,,................................................................................................................ps-progress" />
            </div>
          </li>
          <li>
            <p className="skill-title">Java</p>
            <div className="progress-bar">
              <div className="progress j-progress" />
            </div>
          </li>
        </ul>
      </div>
      <div className="references-section">
        <h3 className="main-title">Projects</h3>
        <div className="referee">
          <h6 className="sub-title">
            <a href="https://www.idigitalpreneur.com/" target="_blank">
              Idigitalpreneur
            </a>
          </h6>
          <p className="sub-para">HTML,CSS &amp; JavaScript PHP MySQL</p>
        </div>
        <div className="referee">
          <h6 className="sub-title">
            <a href="https://www.travofolks.com/" target="_blank">
              Travofolks
            </a>
          </h6>
          <p className="sub-para">HTML,CSS,Javascript,Bootstrap,php,MySQL</p>
        </div>
        <div className="referee">
          <h6 className="sub-title">
            <a href="https://my-business-new.netlify.app" translate="_blank">
              Business
            </a>
          </h6>
          <p className="sub-para">
            HTML,CSS,Javascript,Bootstrap CSS &amp; ReactJS
          </p>
        </div>
        <div className="referee">
          <h6 className="sub-title">
            <a href="https://stopwatch-bay.vercel.app/" translate="_blank">
              StopWatch
            </a>
          </h6>
          <p className="sub-para">
            HTML,CSS,Javascript,Bootstrap CSS &amp; ReactJS
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="right-section">
    <div className="right-main-content">
      <section className="about sect">
        <h2 className="right-title">About Me</h2>
        <p className="para">
          I am a 24-year-old BCA. (Computer Science) graduate currently pursuing
          my MCA from IGNOU. With a strong passion for technology and a drive
          for continuous learning
          <br />
          <br />I am constantly seeking new challenges and opportunities to
          expand my knowledge and expertise. I thrive in collaborative
          environments and am always open to new projects, partnerships, and
          learning experiences. Let's connect and explore how we can make a
          positive impact together.
        </p>
      </section>
      <section className="experince sect">
        <h2 className="right-title">Experience</h2>
        <div className="timeline">
          <div className="left-tl-content">
            <h5 className="tl-title">Idigitalpreneur Pvt LTd</h5>
            <p className="para">Nov 2022 - Present</p>
          </div>
          <div className="right-tl-content">
            <div className="tl-content">
              <h5 className="tl-title-2">Frontend Developer</h5>
              <p className="para">
                Developed an interactive map for products of this company &amp;
                maintain the website that enabled 1 Lac+ users to search
                preferred courses, Conducted routine updates, security patches,
                and other website maintenance tasks; achieved a 93% optimal
                website performance.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="left-tl-content">
            <h5 className="tl-title">The Webplant Pvt Ltd</h5>
            <p className="para">Sep 2021 - Oct 2022</p>
          </div>
          <div className="right-tl-content">
            <div className="tl-content">
              <h5 className="tl-title-2">Web Designer</h5>
              <p className="para">
                Optimized 30+ key content pages for SEO objectives, which
                improved online search-ranking accuracy by 63%. Manipulated
                textual and graphic imagery to create website content that
                served the needs of 20+ marketing teams
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="education sect">
        <h2 className="right-title">education</h2>
        <div className="timeline">
          <div className="left-tl-content">
            <h5 className="tl-title">High School</h5>
            <p className="para">2014 - 2015</p>
          </div>
          <div className="right-tl-content">
            <div className="tl-content">
              <h5 className="tl-title-2">
                Adalikhal, Pauri Garhwal ,Uttarakhand
              </h5>
              <p className="para">
                Did my high school from Janta Inter College Adalikhal , Pauri
                Garhwal Uttarakhand
              </p>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="left-tl-content">
            <h5 className="tl-title">Intermediate</h5>
            <p className="para">2015 - 2016</p>
          </div>
          <div className="right-tl-content">
            <div className="tl-content">
              <h5 className="tl-title-2">VPS Govardhan</h5>
              <p className="para">
                Did my Intermediate from Janta Inter College Adalikhal , Pauri
                Garhwal Uttarakhand
              </p>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="left-tl-content">
            <h5 className="tl-title">Bachelor of Comupter Application</h5>
            <p className="para">2016 - 2019</p>
          </div>
          <div className="right-tl-content">
            <div className="tl-content">
              <h5 className="tl-title-2">
                kumaun University , Nainital ,Uttarakhand
              </h5>
              <p className="para">Did my graduation from kumaun University</p>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="left-tl-content">
            <h5 className="tl-title">Master of Computer Application</h5>
            <p className="para">2020 - Present</p>
          </div>
          <div className="right-tl-content">
            <div className="tl-content">
              <h5 className="tl-title-2">IGNOU , New Delhi</h5>
              <p className="para">
                Pursuing my Masters from indira gandhi national open university
                ,New Delhi
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</main>
    </div>
    </div>

   </>
  )
}

export default Resume