import React from 'react';
import Table from './Table';
import Input from './Input'


class Home extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            store: [],
            edit: ""
        }
    }
    inputChange = (data) => {
        this.setState({
            store: [...this.state.store, data]
        })
    }

    deleteData = (del) => {
        this.setState({
            store: this.state.store.filter((item, i) => i !== del)
        })
        // console.log("")
    }
    
    editData = (update) => {
        this.setState({
            edit: update
        })
    }

    submitEdit = (data, index) => {
        var temp = this.state.store.map((a, i) => {
            if(i === index){
                a = data
            }
            return a
        })
        this.setState({
            store: temp,
            edit: ""
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="d-flex justify-content-around">
                    <Input update={this.submitEdit} edit={this.state.edit} click={this.inputChange}/>
                    <Table update={this.editData} delete={this.deleteData} store={this.state.store}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Home