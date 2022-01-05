import React, { Component } from 'react';
import './Home.css';
import guidance from '../../Assets/images/guidance.png';
import axios from 'axios';
class Home extends Component {
    constructor(props) {
        super(props);
        const d = new Date();
        const date = d.toISOString().split('T')[0];
        this.state = {
            'currentDate': date,
            'advice': '',
        };
    }

    componentDidMount() {
        const todayDate = localStorage.getItem('todayDate');
        const dailyAdvice = localStorage.getItem('dailyAdvice');

        if ((todayDate === null && dailyAdvice === null) || todayDate !== this.state.currentDate) {
            axios.get('	https://api.adviceslip.com/advice').then(res => {

                console.log(todayDate);
                if (res.data !== "") {
                    this.setState({
                        'advice': res.data.slip.advice
                    });
                    localStorage.removeItem("todayDate");
                    localStorage.removeItem("dailyAdvice");
                    localStorage.setItem('todayDate', this.state.currentDate);
                    localStorage.setItem('dailyAdvice', this.state.advice);
                }
            });
        } else {
            console.log(dailyAdvice, "adsa",)
            this.setState({
                'advice': dailyAdvice
            });
        }

    }
    render() {


        return (
            <>
                <div className="container">
                    <div className="centeredDate">{this.state.currentDate}</div>

                    <img className="adaviceImg" src={guidance} alt="advice" />

                    <div className="centered">{this.state.advice} </div>
                </div>
            </>
        )
    }
}
export default Home;
