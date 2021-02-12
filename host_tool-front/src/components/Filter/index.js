import React from 'react'
import { FirebaseContext } from '../Firebase';

const Filter = () => {
    const firebase = React.useContext(FirebaseContext);
    const [filterInput, setFilterInput] = React.useState('');
    const [filterOption, setfilterOption] = React.useState('project_name')
    const [results, setResults] = React.useState([])

    const handleChange = e => {
        setFilterInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (filterInput) {
            firebase.project_ref()
                .where(`${filterOption}`, "==", `${filterInput}`)
                .get()
                .then((querySnapshot) => {
                    const array = [];
                    querySnapshot.forEach((doc) => {
                        let project = doc.data();
                        project.id = doc.id;
                        array.push(project);
                    });
                    setResults(array);
                    console.log(array);
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
            setFilterInput('');
        }
    }

    const getFilteredResult = (project) =>
    (
        <tr key={project.id} style={{ cursor: "pointer" }}>
            <th scope="row"></th>
            <td>{project.project_name}</td>
            <td>{project.username}</td>
        </tr>
    )


    return (
        <>
            <h1>Search projets</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3 ml-auto">
                    <select className="custom-select" required value={filterOption} onChange={e => { setfilterOption(e.target.value) }}>
                        <option value="" disabled>Choose the filter option</option>
                        <option value="project_name">Project</option>
                        <option value="domain_name">Domain</option>
                        <option value="username">Username</option>
                    </select>
                    <input type="text" className="form-control d-block" placeholder="Recherchez par projet, domaine ou identifiant" value={filterInput} onChange={handleChange} />
                </div>
            </form>

            {(results.length <= 0) && <p className="text-dark text-center">No results yet !</p>}

            {
                (results.length > 0) &&
                (
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Project</th>
                                <th scope="col">Username</th>
                            </tr>
                        </thead>
                        <tbody >
                            {results.map((result) => getFilteredResult(result))}
                        </tbody>
                    </table>
                )
            }

        </>
    )
}

export default Filter
