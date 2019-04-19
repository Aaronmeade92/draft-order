import React, { Component, Fragment } from 'react';
import shuffle from 'shuffle-array';

const center = {
    paddingLeft: '40%',
    paddingTop: '10%',
}

const buttonCenter = {
    textAlign: 'center',
    display: 'inlineBlock',
}


class Dashboard extends Component {
    state = {
        query: '',
        draftOrder: [],
    };

    

    addToList = () => {
        let ul = document.getElementById('list');
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(this.state.query));
        ul.appendChild(li);
        this.state.draftOrder.push(this.state.query);
        console.log(this.state.draftOrder);
    }

    randomizeOrder = () => {
        shuffle(this.state.draftOrder);
        console.log(this.state.draftOrder);
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        });
    };

    render() {
        return (
            <Fragment>
                <div style={center}>
                    <h1>Draft Order</h1>
                    <form>
                        <input placeholder='Add to your draft...'
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                        />
                    </form>
                </div>
                <div style={buttonCenter}>
                    <button onClick={this.addToList} style={buttonCenter}>Add</button>
                    <button onClick={this.randomizeOrder} style={buttonCenter}>Randomize</button>
                </div>

                <div style={center}>
                    <ul id='list'>Draft Order</ul>
                </div>

            </Fragment>
        );
    }
}

export default Dashboard;