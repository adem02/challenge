import React from 'react'
import { FirebaseContext } from '../Firebase';
import FormInput from '../Form';
import { useParams, useHistory } from 'react-router-dom';

const UpdateProject = props => {

    const firebase = React.useContext(FirebaseContext);

    const emptyData = {
        project_name: '',
        domain_name: '',
        username: '',
        admin_password: '',
        super_admin_password: ''
    }

    const [projectData, setProjectData] = React.useState(emptyData);
    const { project_name, domain_name, username, super_admin_password, admin_password } = projectData;
    const history = useHistory();


    const { id } = useParams();

    React.useEffect(() => {
        firebase.project_ref().doc(id).get().then((doc) => {
            if (doc.exists) {
                setProjectData(doc.data());
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        firebase.project_ref().doc(id).update({
            project_name: project_name,
            domain_name: domain_name,
            username: username,
            super_admin_password: super_admin_password,
            admin_password: admin_password
        }).then(() => {
            history.push('/projects-list');
        })
    }

    const handleChange = (e) => {
        setProjectData({ ...projectData, [e.target.name]: e.target.value });
    }

    return (
        <div className="container">
            <FormInput data={projectData} handleChange={handleChange} handleSubmit={handleSubmit} title={'Create and Host your project'} />
        </div>
    )
}

export default UpdateProject
