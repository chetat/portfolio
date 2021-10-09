interface Project {
    id: string;
    name: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
}

const ProjectDetails = ({id}: Project) => {
    return (
        <div>
            ProjectDetails
        </div>
    )
}

export default ProjectDetails;