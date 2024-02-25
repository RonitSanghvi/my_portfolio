import React, {useState} from 'react';
import styled from 'styled-components';
import CertificateCard from '../Cards/CetificateCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    overflow-x: scroll;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
        align-items: center;
    }
`

const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 2px 4px;
        border-radius: 4px;
    }
`
const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`

const Index = () => {
    const [toggle, setToggle] = useState('all'); // Initialize toggle state

    return (
        <Container id='certificate'>
            <Title>Certificates</Title>
            <Desc>
                These are the list of Certificates I earned since my bachelor's in 2018.
            </Desc>
 
            <ToggleButtonGroup>

                {toggle === 'all' ?
                <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
                :
                <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
                }
                <Divider />
                {toggle === 'Management Skill Learning' ?
                    <ToggleButton active value="Management Skill Learning" onClick={() => setToggle('Management Skill Learning')}>Management Skill Learning</ToggleButton>
                    :
                    <ToggleButton value="Management Skill Learning" onClick={() => setToggle('Management Skill Learning')}>Management Skill Learning</ToggleButton>
                }
                <Divider />
                {toggle === 'Coding based Learning' ?
                    <ToggleButton active value="Coding based Learning" onClick={() => setToggle('Coding based Learning')}>Coding based Learning</ToggleButton>
                    :
                    <ToggleButton value="Coding based Learning" onClick={() => setToggle('Coding based Learning')}>Coding based Learning</ToggleButton>
                }
                <Divider />
                {toggle === 'Participation' ?
                    <ToggleButton active value="Participation" onClick={() => setToggle('Participation')}>Participation & Volunteer</ToggleButton>
                    :
                    <ToggleButton value="Participation" onClick={() => setToggle('Participation')}>Participation & Volunteer</ToggleButton>
                }
                <Divider />
                {toggle === 'Other' ?
                    <ToggleButton active value="Other" onClick={() => setToggle('Other')}>Other</ToggleButton>
                    :
                    <ToggleButton value="Other" onClick={() => setToggle('Other')}>Other</ToggleButton>
                }
            </ToggleButtonGroup>
            
            <Wrapper>
                <CertificateCard toggle={toggle} />
            </Wrapper>
        </Container>
    );
};

export default Index;
