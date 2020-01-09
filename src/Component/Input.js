import React from 'react';
import TextField from '@material-ui/core/TextField'


class Input extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            company: "",
            location: "",
            jobTitle: "",
            noOpenings: "",
            salary: "",
            isEdit: false,
        }
    }

    dataChange = (enter) => {
        this.setState({[enter.target.name]: enter.target.value})
    }

    dataSubmit = () => {
        var obj = {
            company: this.state.company,
            location: this.state.location,
            jobTitle: this.state.jobTitle,
            noOpenings: this.state.noOpenings,
            salary:this.state.salary
        }
        if(this.props.edit === "")
            this.props.click(obj)
        else
            this.props.update(obj, this.props.edit)
        this.reset()
        // console.log(this.state)
    }

    reset = () => {
        this.setState({
            company: "",
            location: "",
            jobTitle: "",
            noOpenings: "",
            salary: ""
        })
    }

    render(){
        // console.log(this.props)
        return(
            <React.Fragment>
                <form className="mt-5">
                    <h2 className="text-center p-2">Add Details</h2>
                    <div className="m-3">
                        <TextField
                            label="Company"
                            variant="outlined"
                            onChange={this.dataChange}
                            value={this.state.company}
                            name="company"
                            required
                        />
                    </div>
                    <div className="m-3">
                        <TextField
                            label="Location"
                            variant="outlined"
                            onChange={this.dataChange}
                            value={this.state.location}
                            name="location"
                            required
                        />
                    </div>
                    <div className="m-3">
                        <TextField
                            label="Job Title"
                            variant="outlined"
                            onChange={this.dataChange}
                            value={this.state.jobTitle}
                            name="jobTitle"
                            required
                        />
                    </div>
                    <div className="m-3">
                        <TextField
                            className=""
                            label="No. Openings"
                            variant="outlined"
                            type="Number"
                            onChange={this.dataChange}
                            value={this.state.noOpenings}
                            name="noOpenings"
                            required
                        />
                    </div>
                    <div className="m-3">
                        <TextField
                            label="Salary"
                            variant="outlined"
                            type="Number"
                            onChange={this.dataChange}
                            value={this.state.salary}
                            name="salary"
                            required
                        />
                    </div>
                    <div>
                        {this.props.edit ==="" ? 
                            (<button onClick={this.dataSubmit} className="button btn btn-outline-dark mb-3 offset-3">Enter</button>):
                            (<button onClick={this.dataSubmit} className="button btn btn-outline-dark mb-3 offset-3">Edit</button>)
                        }
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default Input