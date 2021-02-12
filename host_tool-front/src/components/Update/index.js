import React from 'react'
import { FirebaseContext } from '../Firebase';
import FormInput from '../Form';
import { useParams, useHistory } from 'react-router-dom';

const UpdateProject = () => {

    const firebase = React.useContext(FirebaseContext);

    const emptyData = {
        project_name: '',
        domain_name: '',
        username: '',
        admin_password: '',
        super_admin_password: '',
        startDate: '',
        endDate: ''
    }

    const [projectData, setProjectData] = React.useState(emptyData);
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());
    const { project_name, domain_name, username, super_admin_password, admin_password } = projectData;
    const history = useHistory();


    const { id } = useParams();

    React.useEffect(() => {
        if (firebase.auth.currentUser.email === 'super-admin@hd.org') {
            firebase.project_ref().doc(id).get().then((doc) => {
                if (doc.exists) {
                    console.log(doc.data());
                    setStartDate(doc.data().startDate.toDate())
                    setEndDate(doc.data().endDate.toDate());
                    setProjectData({ ...doc.data(), startDate: startDate, endDate: endDate });
                } else {
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        firebase.project_ref().doc(id).update({
            project_name: project_name,
            domain_name: domain_name,
            username: username,
            super_admin_password: super_admin_password,
            admin_password: admin_password,
            startDate: startDate,
            endDate: endDate
        }).then(() => {
            history.push('/projects-list');
        })
    }

    const handleChange = (e) => {
        setProjectData({ ...projectData, [e.target.name]: e.target.value });
    }

    const handleStartDate = (date) => {
        startDate(date)
    }
    const handleEndtDate = (date) => {
        setEndDate(date)
    }

    return (
        <div className="container">
            <FormInput data={projectData} handleChange={handleChange} handleSubmit={handleSubmit} handleStartDate={handleStartDate} handleEndtDate={handleEndtDate} startDate={startDate} endDate={endDate} title={'Create and Host your project'} />
        </div>
    )
}

export default UpdateProject
