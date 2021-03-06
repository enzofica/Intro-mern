import React from 'react'
import { Container, Section, Button } from 'react-bulma-components'

const AddButton = () => {
    return (
        <Section>
            <Container>
                <div className="is-pulled-right">
                    <Button color="danger">Add</Button>
                </div>
            </Container>
        </Section>
    )
}

export default AddButton