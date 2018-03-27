import React, {Component} from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom'
import {TomatoButton} from "./styled/buttons";

class Home extends Component {

    mapDispatchToProps = dispatch => bindActionCreators({
        changePage: () => push('/about-us')
    }, dispatch)

    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>Welcome home!</p>
                <Link to='/'>
                    <TomatoButton>Назад</TomatoButton>
                </Link>

            </div>
        );
    }
}

export default Home;

