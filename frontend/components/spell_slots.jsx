import React from 'react';

class SpellSlots extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: []
        }

    };





    render() {
        return (
            <div className="spell-slots-container">
                <div className="spell-level">
                    <h3 className="spell-level-header">Cantrips</h3>
                    <div className="spells">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
                <div className="spell-level">
                    <h3 className="spell-level-header">Spell Level: 1</h3>
                    <div className="spell-slots">
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                    </div>
                    <div className="spells">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
                <div className="spell-level">
                    <h3 className="spell-level-header">Spell Level: 2</h3>
                    <div className="spell-slots">
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                    </div>
                    <div className="spells">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
                <div className="spell-level">
                    <h3 className="spell-level-header">Spell Level: 3</h3>
                    <div className="spell-slots">
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                    </div>
                    <div className="spells">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
                <div className="spell-level">
                    <h3 className="spell-level-header">Spell Level: 4</h3>
                    <div className="spell-slots">
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                    </div>
                    <div className="spells">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
                <div className="spell-level">
                    <h3 className="spell-level-header">Spell Level: 5</h3>
                    <div className="spell-slots">
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                    </div>
                    <div className="spells">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
                <div className="spell-level">
                    <h3 className="spell-level-header">Spell Level: 6</h3>
                    <div className="spell-slots">
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                    </div>
                    <div className="spells">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
                <div className="spell-level">
                    <h3 className="spell-level-header">Spell Level: 7</h3>
                    <div className="spell-slots">
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                    </div>
                    <div className="spells">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
                <div className="spell-level">
                    <h3 className="spell-level-header">Spell Level: 8</h3>
                    <div className="spell-slots">
                        <input type="checkbox"/>
                    </div>
                    <div className="spells">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
                <div className="spell-level">
                    <h3 className="spell-level-header">Spell Level: 9</h3>
                    <div className="spell-slots">
                        <input type="checkbox"/>
                    </div>
                    <div className="spells">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
            </div>
        )
    }


};

export default SpellSlots;