import React from 'react';
import SubProject from './components/SubProject';

function Projects() {
  const projects = [
    {
      name: "Success Royal Academy Teachears Application",
      status: "Finished",
      body: `A webapp for applying as a SRA Staffs either old or new applicant with admin platform.
      Built using React JS, PHP and MySQL`,
      url: "https://srateachearsapplication.welearn.com.ng/",
    },
    {
      name: "Welearn Class",
      status: "Published, but still on update",
      body: `WeLearn Class is a 24-hour teaching-learning-collaborative virtual classroom invented by a team of instructional technologists and programmers to provide a robust national curriculum-based learning for O-Level, A-Level candidates, as well as students of higher education. Built using React JS, PHP, and MySQL.`,
      url: "https://class.welearn.com.ng/",
    },
    {
      name: "Welearn Tutor",
      status: "Published, but still on update",
      body: `WeLearn Tutor is also from WeLearn; this is the platform tutors use in tutoring the students. Built using React JS, PHP, and MySQL.`,
      url: "https://tutor.welearn.com.ng/",
    },
    {
      name: "Welearn Admin",
      status: "Published, but still on update",
      body: `WeLearn Admin is a platform used to manage students, tutors, payments, and other aspects of the platform. Built using React JS, PHP, and MySQL.`,
      url: "https://admin.welearn.com.ng/",
    },
    {
      name: "UTME MOCK",
      status: "Finished",
      body: `An online copy of UTME Mock for both desktop and mobile views made for both Uniben Tutorials and Success Tutorials Students. Built using React JS, PHP, and MySQL.`,
      url: "https://onlinetest.com.ng/utme_mock/",
    },
    {
      name: "SRA Entrance Exam",
      status: "Finished",
      body: `An online copy of SRA Entrance Exam made for Success Royal Academy, so that they can test their new intake to determine what class the student will join. Built using React JS, PHP, and MySQL.`,
      url: "https://onlinetest.com.ng/sra_e_e/",
    },
    {
      name: "Dxh Document Helper",
      status: "Finished",
      body: `Made for easy creation of documents for students, especially in the University of Benin. Built using React JS.`,
      url: "https://onlinetest.com.ng/dh/#/",
    },
    {
      name: "UNIBEN POST UME MOCK",
      status: "Finished",
      body: `Made for Uniben online students who cannot attend the physical mock at Uniben ICT. Built using HTML, CSS, JavaScript, JQuery/Ajax, Bootstrap, PHP, and MySQL.`,
      url: "https://onlinetest.com.ng/uniben/postume/",
    },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, key) => (
          <div key={key} className="project-card">
            <SubProject
              name={project.name}
              body={project.body}
              url={project.url}
              status={project.status}
            />
          </div>
        ))}
      </div>
      <p style={{
        margin: "8px 0px"
      }}>
        To view projects available offline or to get test account for some of the project, send me a{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://wa.me/2349038692680?text=Hi%20please%20I%20want%20to%20view%20more%20of%20your%20projects%20that%20are%20not%20published."
        >
          WhatsApp message
        </a>
      </p>
    </section>
  );
}

export default Projects;
