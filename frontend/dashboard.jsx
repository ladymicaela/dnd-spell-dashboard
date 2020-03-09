import React from 'react';


class SpellDashboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inputVal: '',
            name: 'Spell',
            description: '',
            higherLevel: '',
            page: '',
            range: '',
            components: '',
            duration: '',
            concentration: '',
            castingTime: '',
            level: '',
            school: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

    };

    handleInput(event) {
        this.setState({
            inputVal: event.target.value
        })
    }

    handleSearch() {
        let spell = this.state.inputVal;
        fetch(`http://www.dnd5eapi.co/api/spells/${spell}`)
            .then(result => result.json())
            .then(
                (result) => {
                    this.setState({
                        name: result.name,
                        description: result.desc,
                        higherLevel: result.higher_level,
                        page: result.page,
                        range: result.range,
                        components: result.components,
                        duration: result.duration,
                        concentration: result.concentration,
                        castingTime: result.casting_time,
                        level: result.level,
                        school: result.school.name
                    });
                },
                (error) => {
                    console.log(error)
                }
            )
    }


    render() {
        return (
            <div className="spell-dashboard-container">
                <input type="text" 
                    placeholder="Search..."
                    onChange={this.handleInput}
                    value={this.state.inputVal}
                />
                <button onClick={this.handleSearch}>Find Spell</button>
                <div className="spell-dashaboard">
                    <h1>{this.state.name}</h1>
                    <div className="spell-requirements">
                        <p>Spell Level: {this.state.level}</p>
                        <p>Components: {this.state.components}</p>
                        <p>Concentration: {this.state.concentration ? `Yes` : `No`}</p>
                    </div>
                    <div className="spell-stats">
                        <p>Casting Time: {this.state.castingTime}</p>
                        <p>Range: {this.state.range}</p>
                        <p>Duration: {this.state.duration}</p>
                    </div>
                    <p>{this.state.description}</p>
                    <p>At higher levels: {this.state.higherLevel}</p>
                    <p>Book: {this.state.page}</p>
                    <p>School of Magic: {this.state.school}</p>
                </div>
            </div>
        )
    }

};

export default SpellDashboard;