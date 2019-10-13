import React, { Component } from 'react';

function handleImput (e) {
    console.log(e.target.value, e.target.name);
}


class Form extends Component {
    constructor() {
        super();
        this.state = {
            title:'',
            responsible: '',
            description: '',
            priority: 'low'
        };
    }

    render () {
        return (
            <div className="card ml-2 mr-4">
                <form className="card-body">
                    <div classname="form-group">
                        <input
                            type="text"
                            name="title"
                            className="form-comtrol mb-2"
                            placeholder="Title"
                            onChange={handleImput}
                        />
                    </div>
                    <div classname="form-group">
                        <input
                            type="text"
                            name="responsible"
                            className="form-comtrol mb-2"
                            placeholder="Responsible"
                            onChange={handleImput}

                        />
                    </div>
                    <div classname="form-group">
                        <input
                            type="text"
                            name="description"
                            className="form-comtrol mb-2"
                            placeholder="Description"
                            onChange={handleImput}

                        />
                    </div>
                    <div classname="form-group">
                        <select
                            name="priority"
                            className="form-comtrol"
                            onChange={ this.handleImput }
                        >
                        <option>low</option>
                        <option>medium</option>
                        <option>high</option>
                        </select>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default Form;
