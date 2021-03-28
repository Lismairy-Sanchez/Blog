import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/userActions'
import * as publicationsActions from '../../redux/actions/publicationsActions'

const {getAll:getAll_Users}=userActions;
const {getByUser:getUser_Publications}=publicationsActions;

class Publications extends Component{

    async componentDidMount(){
        //sino existen los usuarios traerlos
        if(!this.props.usersReducers.users.length){
            await this.props.getAll_Users();
            //console.log(this.props.publicationsReducers)
        }
       this.props.getUser_Publications(this.props.match.params.key);
    }
    render(){
        console.log(this.props)
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
    getUser_Publications
})
export default connect(mapStateToProps,mapDispatchToProps)(Publications);