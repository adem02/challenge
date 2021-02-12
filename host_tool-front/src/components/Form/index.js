import React from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const FormInput = props => {

    const { data, handleChange, handleSubmit, title, handleStartDate, handleEndtDate, startDate, endDate } = props;

    const btn = data.project_name !== '' && data.domain_name !== '' && data.username !== '' && data.super_admin_password !== '' && data.admin_password !== '' && endDate.getYear() > startDate.getYear() ?
        <button type="submit" className="btn btn-warning">SUBMIT<span className="material-icons" style={{ paddingLeft: '5px', height: '100%', verticalAlign: 'middle', fontStyle: 'italic' }}>send</span></button> :
        <button type="submit" className="btn btn-danger" disabled>SUBMIT<span className="material-icons" style={{ paddingLeft: '5px', height: '100%', verticalAlign: 'middle', fontStyle: 'italic' }}>send</span></button>

    return (
        <>
            <form className="form-style" onSubmit={handleSubmit}>

                <h2 className="text-center mb-4">{title}</h2>

                <div className="form-group row">
                    <label className="col-md control-label"><b>Project name</b></label>
                    <div className="col-md">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text material-icons">folder</span>
                            </div>
                            <input name="project_name" placeholder="Your project name" className="form-control" type="text" onChange={handleChange} value={data.project_name} />
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md control-label"><b>Domaine name</b></label>
                    <div className="col-md">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text material-icons">language</span>
                            </div>
                            <input name="domain_name" placeholder="Your Domain name" className="form-control" type="text" onChange={handleChange} value={data.domain_name} />
                        </div>
                    </div>
                </div>


                <div className="form-group row">
                    <label className="col-md control-label"><b>Username</b></label>
                    <div className="col-md">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text material-icons">person</span>
                            </div>
                            <input name="username" placeholder="Username" className="form-control" type="text" onChange={handleChange} value={data.username} />
                        </div>
                    </div>
                </div>


                <div className="form-group row">
                    <label className="col-md control-label" ><b>Admin password</b></label>
                    <div className="col-md">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text material-icons">lock</span>
                            </div>
                            <input name="admin_password" placeholder="Type password for admin" className="form-control" type="password" onChange={handleChange} value={data.admin_password} />
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md control-label"><b>Super Admin Password</b></label>
                    <div className="col-md">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text material-icons">lock</span>
                            </div>
                            <input name="super_admin_password" placeholder="Type password for super admin" className="form-control" type="password" onChange={handleChange} value={data.super_admin_password} />
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md control-label"><b>begining of the hosting</b></label>
                    <div className="col-md">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text material-icons">calendar_today</span>
                            </div>
                            <DatePicker selected={startDate} onChange={date => handleStartDate(date)} />
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md control-label"><b>end of the hosting</b></label>
                    <div className="col-md">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text material-icons">calendar_today</span>
                            </div>
                            <DatePicker className='form-control' style={{ position: 'relative', flex: '1 1 auto', width: '1%', marginBottom: 0 }} selected={endDate} onChange={date => handleEndtDate(date)} />
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-4 mb-5">
                    {btn}
                </div>
            </form>
        </>
    )
}

export default FormInput
