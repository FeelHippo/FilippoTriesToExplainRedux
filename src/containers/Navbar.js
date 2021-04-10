import { Component } from 'react';
import NavbarView from '../components/Navbar/navbar';

/*--- import api services ---*/
import api from '../services/api'
const { fetchUserNews } = api();

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userSearch: '',
        };
    }

    updateSearchField = event => {
        this.setState({
            userSearch: event.target.value,
        })
        // this.state updated when user interacts with input field
        console.log(`Current input field value: ${this.state.userSearch}`)
    }

    fetchUserNews = async () => {
        // use this.state.userSesarch to call API
        console.log(`User confirmed search, awaiting response from API: ${this.state.userSearch}`)
        const newsArticlesFromApi = await fetchUserNews(this.state.userSearch);
        console.log(newsArticlesFromApi);
    }

    render() {
        return (
            <NavbarView 
                currentUserValue={ this.state.userSearch }
                updateUserValue={ this.updateSearchField }
                fetchUserNews={ this.fetchUserNews }
            />
        )
    }
}

export default Navbar;