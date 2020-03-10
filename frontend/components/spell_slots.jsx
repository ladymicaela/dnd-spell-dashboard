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
                1: [true, true, true, true],
                2: [true, true, true],
                3: [true, true, true],
                4: [true, true, true],
                5: [true, true, true],
                6: [true, true],
                7: [true, true],
                8: [true],
                9: [true]
            }
        }

    };





    render() {
        return (
            <div className="spell-slots-container">
                {
                    Object.keys(this.state.spells).map( (spell, idx) => {
                        return (
                            <div className="spell-level" key={idx}>
                                <h3 className="spell-level-header">Spell Level: {spell}</h3>
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
                                                <input type="text" value={name} key={idx}/>
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