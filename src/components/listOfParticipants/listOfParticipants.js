import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './listOfParticipants.css';
import isEqual from 'lodash/isEqual';
import ParticipantCard from './participantCard/participantCard';

class ListOfParticipants extends Component {

    constructor(props) {
        super(props);

        this.mapEachParticipant = this.mapEachParticipant.bind(this);
    }

    mapEachParticipant(participant, index) {
        const { valueSeleted } = this.props;
        const active = isEqual(valueSeleted, participant.name);

        return (
            <div className="col-md-4">
                <ParticipantCard
                    name={participant.name}
                    description={participant.description}
                    active={active}
                />
            </div>
        );
    }

    render() {
        const { listParticipants } = this.props;
        return (
            <div className="list-of-participants">
                <div className="row">
                    {listParticipants.map((participant, key) => this.mapEachParticipant(participant, key))}
                </div>
            </div>
        );
    }
}

ListOfParticipants.prototypes = {
    valueSeleted: PropTypes.string,
    listParticipants: PropTypes.object.isRequired
}

export default ListOfParticipants;