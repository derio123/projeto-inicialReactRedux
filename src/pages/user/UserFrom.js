import { reduxForm } from "redux-form"
import { connect } from "react-redux"
import React from 'react'

const UserFromFunc = props => {
    return (
        <form>
            <label> name </label>
            <input type="text" component="input" name="name"/>

            <label> email </label>
            <input type="text" component="input" name="email"/>
        </form>
    )
}
const UserFrom = (reduxForm({
    form: 'formUser'
}))(UserFromFunc)

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(UserFrom)