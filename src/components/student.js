import React, { Component } from 'react';
import FormErrors from './formErrors';
import './student.css';
import { Bootstrap, Grid, Row, Col } from 'react-bootstrap';
export default class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            studentClass: '',
            yop: '',
            POM: '',
            formErrors: { firstName: '', lastName: '', yop: '' },
            formValid: false
        }
    }
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }, () => { this.validateField(name, value) });

    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let firstName = this.state.firstName;
        let lastName = this.state.lastName;
        let yop = this.state.yop;


        switch (fieldName) {
            case 'firstName':
                firstName = value.length <= 20 && value.match(/^[a-zA-Z]+$/);
                fieldValidationErrors.firstName = firstName ? '' : ' is invalid';
                break;
            case 'lastName':
                lastName = value.length <= 20 && value.match(/^[a-zA-Z]+$/);
                fieldValidationErrors.lastName = lastName ? '' : ' is invalid';
                break;
            case 'yop':
                yop = value <= 2017 ? true : false;
                fieldValidationErrors.yop = yop ? '' : ' is invalid';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            firstName: firstName,
            lastName: lastName
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.firstName && this.state.lastName && this.state.yop <= 2017 });
    }

    render() {
        let button;
        if (this.state.formValid) {
            button = <button type="submit">Submit </button>
        }
        else {
            button = <label>Please fill all the details</label>
        }
        return (
            <form className="App">
                <header className="App-header">
                    Admission Form
                </header>


                <div className="admission_form ">

                    <Row className="show-grid form">
                        <Col xs={6} md={6}>
                            <label htmlFor="firstName">First Name</label>
                        </Col>
                        <Col xs={6} md={6}>
                            <input type="text"
                                name="firstName" onChange={(event) => this.handleUserInput(event)} />
                        </Col>
                    </Row>

                    <Row className="show-grid form">
                        <Col xs={6} md={6}>
                            <label htmlFor="lastName">Last Name</label>
                        </Col>
                        <Col xs={6} md={6}>
                            <input type="text"
                                name="lastName" onChange={(event) => this.handleUserInput(event)} />
                        </Col>
                    </Row>
                    <Row className="show-grid form">
                        <Col xs={6} md={6}>
                            <label htmlFor="studentClass">Class</label>
                        </Col>
                        <Col xs={6} md={6}>
                            <input type="text"
                                name="studentClass" onChange={(event) => this.handleUserInput(event)} />
                        </Col>
                    </Row>
                    <Row className="show-grid form">
                        <Col xs={6} md={6}>
                            <label htmlFor="yop">Y.O.P</label>
                        </Col>
                        <Col xs={6} md={6}>

                            <input type="number"
                                name="yop" onChange={(event) => this.handleUserInput(event)} />
                        </Col>
                    </Row>
                    <Row className="show-grid form">
                        <Col xs={6} md={6}>
                            <label htmlFor="POM">P.O.M</label>
                        </Col>
                        <Col xs={6} md={6}>

                            <input type="number"
                                name="POM" onChange={(event) => this.handleUserInput(event)} />
                        </Col>
                    </Row>
                    <Row className="show-grid form">
                        <Col xs={6} md={6}>
                            <FormErrors formErrors={this.state.formErrors} />
                        </Col>
                        <Col xs={6} md={6}>
                            {button}
                        </Col>
                    </Row>



                </div>
            </form>
        )
    }
}