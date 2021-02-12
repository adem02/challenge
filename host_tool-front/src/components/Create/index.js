import React from 'react'
import '../styles/create.css'
import { FirebaseContext } from '../Firebase';
import FormInput from '../Form';

const CreateProject = () => {

    const emptyData = {
        project_name: '',
        domain_name: '',
        username: '',
        admin_password: '',
        super_admin_password: ''
    }

    const firebase = React.useContext(FirebaseContext);

    const [projectData, setProjectData] = React.useState(emptyData);
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());

    const { project_name, domain_name, username, super_admin_password, admin_password } = projectData;

    const handleChange = (e) => {
        setProjectData({ ...projectData, [e.target.name]: e.target.value });
    }

    const handleStartDate = (date) => {
        setStartDate(date)
    }
    const handleEndtDate = (date) => {
        setEndDate(date)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        firebase.project_ref().add({
            project_name: project_name,
            domain_name: domain_name,
            username: username,
            admin_password: admin_password,
            super_admin_password: super_admin_password,
            startDate: startDate,
            endDate: endDate
        }).then(() => {
            setProjectData(emptyData);
            setStartDate(new Date());
            setEndDate(new Date());
        })
    }

    return (
        <div className="container">

            <div className="card w-50 mx-auto mb-4 box-shadow">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal text-center text-primary">Pro</h4>
                </div>
                <div className="card-body">
                    <h1><b>$15 </b><small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>10 GB of storage</li>
                        <li>Priority email support</li>
                    </ul>
                </div>
            </div>

            <FormInput data={projectData} handleChange={handleChange} handleSubmit={handleSubmit} handleStartDate={handleStartDate} handleEndtDate={handleEndtDate} startDate={startDate} endDate={endDate} title={'Create and Host your project'} />
        </div>
    )
}

export default CreateProject

