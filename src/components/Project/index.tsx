import  { BsStack, BsEye } from 'react-icons/bs'

interface IProject {
    id: number
    name: string
    description: string
    image: any
}

const Project = ({
    id, name, description, image
}: IProject) => {
    return (
        <>
            <div className="project">
                <img src={image} alt="" />
                <h3 style={{marginTop: '1rem', marginBottom: '0.5rem'}}> {name} </h3>
                <div className="project-cta">
                    <div><BsStack style={{marginRight: '0.25rem'}} /> Study Case</div>
                    <div><BsEye style={{marginRight: '0.25rem'}}/> Live Preview</div>
                </div>
            </div>

        </>
    )
}
export default Project;