import { reduxForm, Field } from "redux-form"
import { connect } from "react-redux"
import React from 'react'
import { submitUserAction } from './action/user/UserAction'

const UserFromFunc = props => {
    const { handleSubmit } = props

    const submit = (data, submitUserAction) => {
        submitUserAction(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit((fields) => submit(fields, submitUserAction))}> {/* Manda uma function */}
                <label> name </label>
                <Field type="text" component="input" name="nome" />{/* Para enviar um submit */}

                <label> email </label>
                <Field type="text" component="input" name="email" />

                <button type="submit" > Enviar</button>
            </form>
        </div>
    )
}
const UserFrom = (reduxForm({
    form: 'formUser'
}))(UserFromFunc)

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { submitUserAction })(UserFrom)