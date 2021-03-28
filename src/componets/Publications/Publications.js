import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/userActions'
import * as publicationsActions from '../../redux/actions/userActions'

const {getAll:getAll_Users}=userActions;
const {getByUser:getAll_Publications}=publicationsActions;

class Publications extends Component{

    async componentDidMount(){
        //sino existen los usuarios traerlos
        if(!this.props.usersReducers.users.length){
            await this.props.getAll_Users();
        }
       this.props.getAll_Publications();
    }
    render(){
        return(
            <div>
                <h1>
                    Publicaciones de
                </h1>
               {this.props.match.params.key}
            </div>
        )
    }
}
const mapStateToProps= ({usersReducers, publicationsReducers}) => {
    return {
        usersReducers,
        publicationsReducers
    };
};

const mapDispatchToProps=({
    getAll_Users,
    getAll_Publications
})
export default connect(mapStateToProps,mapDispatchToProps)(Publications);