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
            materials: '',
            duration: '',
            concentration: '',
            ritual: '',
            castingTime: '',
            level: '',
            school: '',
            error: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

    };

    handleInput(event) {
        this.setState({
            inputVal: event.target.value,
            error: ''
        })
    }

    handleSearch() {
        let spell = this.state.inputVal;
        let spellArr = spell.split(" ").map(spell => {
            return spell.toLowerCase()
        });
        let index = spellArr.join('-');

        fetch(`http://www.dnd5eapi.co/api/spells/${index}`)
            .then(result => {
                if (result.ok) {
                    return result.json()
                } else {
                    throw new Error('Cannot find spell. Please check spelling.')
                }
            })
            .then(
                (result) => {
                    this.setState({
                        name: result.name,
                        description: result.desc,
                        higherLevel: result.higher_level,
                        page: result.page,
                        range: result.range,
                        components: result.components,
                        materials: result.material,
                        duration: result.duration,
                        concentration: result.concentration,
                        ritual: result.ritual,
                        castingTime: result.casting_time,
                        level: result.level,
                        school: result.school.name
                    });
                }  
            )
            .catch( error => {
                this.setState({
                    error: error.message
                })
            }) 

    }

    renderDescription() {
        return (
            <div className="spell-description-paragraphs">
                {Object.values(this.state.description).map((paragraph,idx) => {
                    return (
                        <p key={idx}>{paragraph}</p>
                    )
                })}
            </div>
        );
    }


    render() {

        const {inputVal, name, level, components, materials, concentration, ritual, castingTime, range, duration, higherLevel, page, school} = this.state;

        return (
            <div className="spell-dashboard-container">
                <input type="text" 
                    placeholder="Search..."
                    onChange={this.handleInput}
                    value={inputVal}
                />
                <button onClick={this.handleSearch}>Find Spell</button>
                <div>{this.state.error}</div>
                <div className="spell-dashaboard">
                    <h1>{name}</h1>
                    <div className="spell-requirements">
                        <p><b>Spell Level: </b>{level}</p>
                        <p><b>Components: </b>{components}</p>
                        <p><b>Materials: </b>{materials}</p>
                        <p><b>Concentration: </b>{concentration ? `Yes` : `No`}</p>
                        <p><b>Ritual: </b>{ritual ? `Yes` : `No`}</p>
                    </div>
                    <div className="spell-stats">
                        <p><b>Casting Time: </b>{castingTime}</p>
                        <p><b>Range: </b>{range}</p>
                        <p><b>Duration: </b>{duration}</p>
                    </div>
                    <h2>Description</h2>
                    <div className="spell-description">
                        {this.renderDescription()}
                    </div>
                    <p><b>At higher levels: </b>{higherLevel}</p>
                    <p><b>Book: </b>{page}</p>
                    <p><b>School of Magic: </b>{school}</p>
                </div>
            </div>
        )
    }

};

export default SpellDashboard;