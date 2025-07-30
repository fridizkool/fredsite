export default function About() {
  return (
    <>
      <div className="introduction grid grid-cols-24 gap-5">
        <div
          className="grid grid-rows-subgrid col-span-11 row-span-20"
          id="About me"
        >
          <div className="">
            <h1>About me</h1>
            <hr />
          </div>
          <div className="window-blurb">
            React front end developer for Deloitte's IRS contract. Graduated cum
            laude from the University of Pittsburgh with a Bachelor of Sciences
            in Computer Science. Interests are in web development, game
            development, and software development. Open to all types of work
            within the scope of software and web development.
          </div>
          <div>
            <h2>Experience</h2>
            <hr />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="window-blurb">
              <h3>Deloitte</h3>
              <div>Frontend Developer</div>
              <div>June 2024 - August 2025</div>
              <div>
                Contracting for Deloitte from Skillstorm on IRS IOLA project I
                developed a new front end for payments systems. Worked on
                payment transactions, editing payments, cancelling payments and
                more. Made sure of the safe transactions of billions of dollars
                yearly and of reliability and accessibility. Worked within an
                agile team, primarily in React.
              </div>
              <a href="https://www.irs.gov/" target="_blank">
                Website
              </a>
            </div>
            <div className="window-blurb">
              <h3>Skillstorm</h3>
              <div>Java Developer</div>
              <div>March 2024 - Current</div>
              <div>
                Developed skills in Java, Typescript, React, Testing, Spring
                Boot, SQL, AWS, and more. Worked collaboratively with teammates
                to deliver high quality products, like tax software.
              </div>
              <a
                href="https://github.com/fridizkool/Project-2-SkSt"
                target="_blank"
              >
                Tax Prep
              </a>
              {" - "}
              <a
                href="https://github.com/orgs/My-Budget-Buddy/repositories"
                target="_blank"
              >
                Budgeting App
              </a>
            </div>
            <div className="window-blurb">
              <h3>CAASI</h3>
              <div>Frontend Developer</div>
              <div>September 2022 - December 2022</div>
              <div>
                Making a new front end and search system for the Allegheny
                County Policing Project with another front end developer and UX
                designer. Developed in React, Python, Flask.
              </div>
              <a href="https://www.grieftoaction.org/#/" target="_blank">
                Website
              </a>
            </div>
            <div className="window-blurb">
              <h3>Ambler Borough</h3>
              <div>Summer Maintenance</div>
              <div>July 2021 - August 2021</div>
              <div>
                Maintained waste water treatment plant and Ambler roadways
              </div>
            </div>
          </div>
          <div>
            <h2>Education</h2>
            <hr />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="window-blurb">
              <h3>University of Pittsburgh</h3>
              <div>Bachelor's of Science in Computer Science</div>
              <div>Graduated Cum Laude</div>
              2020-2023
            </div>
            <div className="window-blurb">
              <h3>Montgomery County Community College</h3>
              <div>Associate's of Science in Computer Science</div>
              2018-2020
            </div>
          </div>
        </div>
        <img
          src="my picture.jpg"
          className="object-fill col-span-12 row-start-2 row-span-6 col-start-13 window-blurb"
          id="My pic"
          draggable={false}
        />
      </div>
    </>
  );
}
