import React from 'react';
import { IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class Table extends React.Component{
    constructor(props){
        super(props)

        this.state = {}
    }

  sortAscOpening = () => {
    this.setState({
      store: this.props.store.sort((a, b) => a.noOpenings - b.noOpenings)
    })
  }

  sortDscOpening = () => {
    this.setState({
      store: this.props.store.sort((a, b) => b.noOpenings - a.noOpenings)
    })
  }

  sortAscSalary = () => {
    this.setState({
      store: this.props.store.sort((a, b) => a.salary - b.salary)
    })
  }

  sortDscSalary = () => {
    this.setState({
      store: this.props.store.sort((a, b) => b.salary - a.salary)
    })
  }

  render(){
    console.log("josi", this.props.store)
    return(
      <React.Fragment>
        <table className="table table-striped col-9">
          <thead className="">
            <tr>
              <th scope="col">Company<br/>
                <FormControl className="dropdown">
                  <InputLabel>Filter by company</InputLabel>
                  <Select>
                    <MenuItem value={10}>Ten</MenuItem>
                  </Select>
                </FormControl>
              </th>
              <th scope="col">Location<br/>
                <FormControl className="dropdown">
                  <InputLabel>Filter by location</InputLabel>
                  <Select>
                    <MenuItem value={10}>Ten</MenuItem>
                  </Select>
                </FormControl>
              </th>
              <th scope="col">Job Title</th>
              <th scope="col">No Openings<br/>
                {/* {this.props.noOpenings === false ? */}
                <button className="sort ml-2 btn btn-outline-dark" onClick={() => this.sortAscOpening()}>&#11014;</button>
                <button className="sort ml-2 btn btn-outline-dark" onClick={() => this.sortDscOpening()}>&#11015;</button>
                {/* } */}
              </th>
              <th scope="col">Salary<br/>
                <button className="sort mr-2 btn btn-outline-dark" onClick={() => this.sortAscSalary()}>&#11014;</button>
                <button className="sort mr-2 btn btn-outline-dark" onClick={() => this.sortDscSalary()}>&#11015;</button>
              </th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {this.props.store.map((item, i) => {
            return(
              <tbody key={i}>
                <tr>
                  <td>{item.company}</td>
                  <td>{item.location}</td>
                  <td>{item.jobTitle}</td>
                  <td>{item.noOpenings}</td>
                  <td>{item.salary}</td>
                  <td><IconButton onClick={() => this.props.update(i)}><EditIcon/></IconButton></td>
                  <td><IconButton className="text-danger" onClick={() => this.props.delete(i)}><DeleteForeverIcon/></IconButton></td>
                </tr>
              </tbody>
            )
          })}
        </table>
      </React.Fragment>
    )
  }
}

export default Table