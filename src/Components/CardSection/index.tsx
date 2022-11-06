import React, { ReactNode } from 'react';
import { Card, CardSectionContainer, CardText, CardTitle } from './styles';

type Sizes = "small" | "medium" | "big"

interface Props {
  children?: ReactNode;
}
// pending component
export default function CardSection({ children }: Props) {
  return (
    <React.Fragment>
        <CardSectionContainer>
            <Card>
                <CardTitle>Documentation &rarr;</CardTitle>
                <CardText>Find in-depth information about SpeeDao features and API.</CardText>
            </Card>
            <Card>
                <CardTitle>Quick start &rarr;</CardTitle>
                <CardText>An easy example to start using an amazing tool in your Discord channel.</CardText>
            </Card>
            <Card>
                <CardTitle>Getting important information about your DAO &rarr;</CardTitle>
                <CardText>Simple commands to know the important details quickly.</CardText>
            </Card>
            <Card>
                <CardTitle>Vote directly in Discord &rarr;</CardTitle>
                <CardText>Participate in an easy way, it has never been so easy.</CardText>
            </Card>
        </CardSectionContainer>
    </React.Fragment>
  );
}