import React, {Component} from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom'
import {BlurButton} from "./styled/buttons";

class AboutUs extends Component {

    mapDispatchToProps = dispatch => bindActionCreators({
        changePage: () => push('/about-us')
    }, dispatch)

    render() {
        return (
            <div>
                <h1>About US</h1>
                <Link to='/'>
                    <BlurButton width='10%' fontSize='24px' padding="10px">Назад</BlurButton>
                </Link>

            </div>
        );
    }
}

export default AboutUs;

