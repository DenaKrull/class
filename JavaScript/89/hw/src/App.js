import './App.css';
import Welcome, { WelcomeClass } from './Welcome';
import React, { Component } from 'react';
import Clock from './Clock';
import Student from './Student';

class App extends Component {
    // state = {
    //   count:0,

    // }
    // componentDidMount(){

    //   setInterval(() => {
    //     this.setState({count: this.state.count + 1})
    //   }, 1000);
    // }

    state = {
        students: [{
                id: 1,
                name: 'Joe',
                address: {
                    street: '1600 Pennsylvania Ave NW',
                    city: 'Washington',
                    state: 'DC',
                    zip: '20500'
                }
            },
            {
                id:2,
                name: 'Kamala',
                address: {
                    street: '1600 Pennsylvania Ave NW',
                    city: 'Washington',
                    state: 'DC',
                    zip: '20500'
                }
            }
        ]
    }
    getTheStudentsJsx() {
        return this.state.students.map((student,index) => <Student student={student} key={index} />)
            
        }
        render() {

            return ( 
                <div>
                Hello World!
                <Welcome name = "Joe" />
                < Welcome name = "Kamala" />

                { /* {this.state.count < 10 || this.state.count>20 ? */ } 
                <WelcomeClass name = "Joe" />
                 { /* : <h1>Component should have unmounted</h1>} */ }
                <WelcomeClass name = "Kamala" />
                <Clock /> 
                {/* <Student name={this.state.students[0].name}/>
                        <Student name={this.state.students[1].name}/> */}

                { /* {this.state.students.map(student=> <Student student={student}/>)} */ } { /* {theStudents} */ } { this.getTheStudentsJsx() } 
                </div>
            );
        }
    }

    export default App;