import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Detail = styled.div`
    min-height: 60px;
    background-color: #e5eaf4;
    border: 1px solid #04032e;
    color: #04032e;
    padding: 5px;
    box-sizing: border-box;
`;

const ItemLink = styled(Link)`
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    color: #0a085f;

    &:hover {
        text-decoration: underline;
    }
`

interface ITicket {
    ticketId: string;
    ticketNumber: number;
    projectName: string;
    description: string;
    priority: string;
    sprintName: number;
    storyPoints: number;
    ticketType: string;
}

interface ITicketDetailProps {
    ticket: ITicket;
}

export const TicketDetail: React.FC<ITicketDetailProps> = ({ ticket }) => {
    return (
        <Detail>
            <ItemLink to={`/view/ticket/${ticket.projectName.toUpperCase()}-${ticket.ticketNumber}`}>{`${ticket.projectName}-${ticket.ticketNumber}`}</ItemLink>
            <div>{`Description: ${ticket.description}`}</div>
            <div>{`Priority: ${ticket.priority}`}</div>
            <div>{`Sprint Name: ${ticket.sprintName}`}</div>
            <div>{`Story Points: ${ticket.storyPoints}`}</div>
            <div>{`Ticket Type: ${ticket.ticketType}`}</div>
        </Detail>
    );
}