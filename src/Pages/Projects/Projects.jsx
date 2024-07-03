import project1Img from "../../assets/project1.jpeg"
import "./Projects.css"
function Projects() {
    const projects = [


        {
            id:1,
            title: "katani road",
            description: "This is a project that I did for a client. It is a website that.",
            img:project1Img,
        },
        {
            id:2,
            title: "katani road",
            description: "This is a project that I did for a client. It is a website that.",
            img:project1Img,
            },
            {
                id:3,
                title: "katani road",
                description: "This is a project that I did for a client. It is a website that",
                img:project1Img,
                },
                {
                    id:4,
                    title: "katani road",
                    description: "This is a project that I did for a client. It is a website that",
                    img:project1Img,
                    },
                    {
                        id:5,
                        title: "katani road",
                        description: "This is a project that I did for a client. It is a website that",
                        img:project1Img,
                        },
                        {
                            id:6,
                            title: "katani road",
                            description: "This is a project that I did for a client. It is a website that",
                            img:project1Img,
                            },
                            ]


    ]
  return (
    <div>
     <h2 className="projmaintitle">View Our Projects</h2> 
     <div className="projects-hero"></div>
     <div className="projects-container">
        <h2 className="projtitle">Complete Projects</h2>
     </div>
    </div>
  )
}

export default Projects
