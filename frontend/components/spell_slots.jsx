import React from 'react';

class SpellSlots extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            spells: {
                0: ['','','','','','',''],
                1: ['', '', '', '', '', ''],
                2: ['', '', '', '', '', ''],
                3: ['', '', '', '', '', ''],
                4: ['', '', '', '', '', ''],
                5: ['', '', '', '', '', ''],
                6: ['', '', '', '', '', ''],
                7: ['', '', '', '', '', ''],
                8: ['', '', '', '', '', ''],
                9: ['', '', '', '', '', '']
            },
            slots: {
                0: [],
                1: [false, false, false, false],
                2: [false, false, false],
                3: [false, false, false],
                4: [false, false, false],
                5: [false, false, false],
                6: [false, false],
                7: [false, false],
                8: [false],
                9: [false]
            }
        }

        this.handleChange = this.handleChange.bind(this);

    };

    handleChange(event,spell,idx) {
        let temp = Object.assign({},this.state.spells);
        temp[spell][idx] = event.target.value;
        this.setState({
            spells: temp
        })
    }


    render() {
        return (
            <div className="spell-slots-container">
                {
                    Object.keys(this.state.spells).map( (spell, idx) => {
                        return (
                            <div className="spell-level" key={idx}>
                                <h3 className="spell-level-header">{idx === 0 ? 'Cantrips' : `Spell Level: ${spell}`}</h3>
                                <div className="spell-slots">
                                    {this.state.slots[spell].map( (slot, idx) => {
                                        return (
                                            <input type="checkbox" key={idx}/>
                                        )
                                    })}
                                </div>
                                <div className="spells">
                                    {
                                        this.state.spells[spell].map( (name, idx) => {
                                            return (
                                                <label key={idx} className="spell-icon">
                                                    <input type="text" 
                                                        value={name} 
                                                        onChange={(event) => this.handleChange(event, spell,idx)}
                                                    />
                                                    <div className="fas fa-magic" onClick={(e) => this.props.spellSearch(e,name)}></div>
                                                </label>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        )
                    })
                }
            </div>
    )}


};

export default SpellSlots;