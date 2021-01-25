import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class MyFileInput extends Component {

    constructor(props) {
        super (props);

        this.state = {
            file: null
        };
    }

    onChangeHandler=event=>{
        this.setState({
            file: event.target.files[0]
        })
        console.log(event.target.files[0])
    }

    render() {
        return (
            <div>
                <div class ="container">
                    <div class="row">
                        <div class="offset-md-3 cold-md-6">
                            <div class="form-group files">
                                <label>Upload File: </label>
                                <input type="file" name="file" onChange={this.onChangeHandler}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyFileInput;