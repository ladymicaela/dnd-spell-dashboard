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
                <div className="spell-search">
                    <input type="text" 
                        placeholder="Search..."
                        onChange={this.handleInput}
                        value={inputVal}
                    />
                    <button onClick={this.handleSearch}>Find Spell</button>
                    <div className="spell-errors">{this.state.error}</div>
                </div>
                <div className="spell-dashboard">
                    <h1 className="spell-name">{name}</h1>
                    <div className="spell-requirements">
                        <p><b>Spell Level: </b>{level}</p>
                        <div className="spell-info-header">
                            <div className="spell-info">
                                <p><b>Casting Time: </b>{castingTime} <i>{ritual ? `(ritual)` : ``}</i></p>
                                <p><b>Components: </b>{components}</p>
                            </div>
                            <div className="spell-info">
                                <p><b>Range: </b>{range}</p>
                                <p><b>Duration: </b>{duration} <i>{concentration ? `(concentration)` : ``}</i></p>
                            </div>
                        </div>
                        <p><b>Materials: </b>{materials}</p>
                    </div>
                    <h2 className="spell-description">Description</h2>
                    <div className="spell-description">
                        {this.renderDescription()}
                        <p><b>At higher levels: </b>{higherLevel}</p>
                    </div>
                    <p><b>Book: </b>{page}</p>
                    <p><b>School of Magic: </b>{school}</p>
                </div>
            </div>
        )
    }

};

export default SpellDashboard;