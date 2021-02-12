import React from 'react'
import { FirebaseContext } from '../Firebase';
import { useHistory } from 'react-router-dom'
import Filter from '../Filter';

const ProjectsList = () => {
    const firebase = React.useContext(FirebaseContext);
    const [projects, setProjects] = React.useState([])
    const history = useHistory();

    React.useEffect(() => {
        if (!firebase.auth.currentUser) {
            history.push('/');
        } else {
            firebase.project_ref().get().then((querySnapshot) => {
                const array = [];
                querySnapshot.forEach((doc) => {
                    let project = doc.data();
                    project.id = doc.id;
                    array.push(project);
                });
                setProjects(array);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onDelete = (project) => {
        firebase.project_ref().doc(project.id).delete().then(() => {
            const array = projects.filter(el => el.id !== project.id)
            setProjects(array);
        }).catch((err) => { })
    }

    const listingProjects = (project) => (
        <tr key={project.id}>
            <td>{project.project_name}</td>
            <td>{project.domain_name}</td>
            <td>{project.username}</td>
            <td><span className="material-icons text-primary " style={{ cursor: 'pointer' }} onClick={() => (firebase.auth.currentUser.email === 'super-admin@hd.org') && history.push(`update-project/${project.id}`)}>edit</span></td>
            <td><span className="material-icons text-danger" style={{ cursor: 'pointer' }} onClick={() => (firebase.auth.currentUser.email === 'super-admin@hd.org') && onDelete(project)}>delete</span></td>
        </tr>
    )

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h1 className="mb-5">List of projects</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Project</th>
                                <th scope="col">Domain</th>
                                <th scope="col">Creator</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects && projects.map((project) => listingProjects(project))}
                        </tbody>
                    </table>
                </div>

                <div className="col-md-4">
                    <Filter />
                </div>
            </div>
        </div>
    )
}

export default ProjectsList
