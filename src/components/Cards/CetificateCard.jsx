import React from 'react'
import styled from 'styled-components'

import Github from '../../Assets/Certificates/Github.png'
import GIT1 from '../../Assets/Certificates/GIT-CodeQuest.jpg'
import Indus from '../../Assets/Certificates/Indus.jpg'
import FCC from '../../Assets/Certificates/FCC_ResponsoveWebDesign.png'
import CSS from '../../Assets/Certificates/GL_CSS.png'
import HTML from '../../Assets/Certificates/GL_HTML.png'
import LD from '../../Assets/Certificates/LD-InsightCoding.jpg'
import Figma from '../../Assets/Certificates/LI_Figma.png'
import DecisionMaking from '../../Assets/Certificates/LI_DecisionMaking.png'
import Flutter from '../../Assets/Certificates/LI_Flutter.png'
import Flutter2 from '../../Assets/Certificates/LI_Flutter2.png'
import PRJM from '../../Assets/Certificates/LI_PRJM.png'
import ProblemSolving from '../../Assets/Certificates/LI_ProblemSolving.png'
import ReactSecuringApp from '../../Assets/Certificates/React_SecuringWeb.png'
import ReactNative from '../../Assets/Certificates/ReactNative.png'
import Scrum from '../../Assets/Certificates/Scrum.png'

const Card = styled.div`
    width: 500px;
    margin: 0px 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 80%;
        // width: 30px;
    }

    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`

const Image = styled.img`
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
`
const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    overflow: auto;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    };
    &::-webkit-scrollbar {
        display: none;
    };
    
    
`

const CertificateCard = ({ src, name }) => {
    return (
        <Card>
            <Image src={src} />
            <Role>{name}</Role>
        </Card>
    );
}

const CertificateList = [
    {
        "img": Github, 
        "name": 'Github by Github & Linkedin',
        "type":'Other'
    },
    {
        "img": GIT1,
        "name": "CodeQuest Participation at GTU Tech Fest",
        "type":'Participation'
    },
    {
        "img": Indus,
        "name": "Blind Coding Participation at Indus College, India",
        "type":'Participation'
    },
    {
        "img": FCC,
        "name": "Responsive Web Design by Free Code Camp",
        "type":'Coding based Learning'
    },
    {
        "img": CSS,
        "name": "CSS by Great Learning",
        "type":'Coding based Learning'
    },
    {
        "img": HTML,
        "name": "HTML by Great Learning",
        "type":'Coding based Learning'
    },
    {
        "img": LD,
        "name": "Insight Coding at LD College, India",
        "type":'Participation'
    },
    {
        "img": Figma,
        "name": "Figma by Linkedin",
        "type":'Other'
    },
    {
        "img": Flutter,
        "name": "Flutter Essential by Linkedin",
        "type":'Coding based Learning'
    },
    {
        "img": Flutter2,
        "name": "Flutter with Firebase by Linkedin",
        "type":'Coding based Learning'
    },
    {
        "img": PRJM,
        "name": "Project Management by Linkedin",
        "type":'Management Skill Learning'
    },
    {
        "img": DecisionMaking,
        "name": "Decision Making by Linkedin",
        "type":'Management Skill Learning'
    },
    {
        "img": ProblemSolving,
        "name": "Problem Solving by PMI & Linkedin",
        "type":'Management Skill Learning'
    },
    {
        "img": ReactSecuringApp,
        "name": "React Securing Apps by Linkedin",
        "type":'Coding based Learning'
    },
    {
        "img": ReactNative,
        "name": "React Native by Linkedin",
        "type":'Coding based Learning'
    },
    {
        "img": Scrum,
        "name": "Scrum Advanced by PMI & Linkedin",
        "type":'Management Skill Learning'
    }
]

const CertificateCardList = ({toggle}) => {

    return (
        <>
                {toggle === 'all' ? (
                    CertificateList.map((certi, index) => (
                        <CertificateCard key={index} src={certi.img} name={certi.name} />
                    ))
                ) : (
                    CertificateList.filter(cert => cert.type === toggle).map((certi, index) => (
                        <CertificateCard key={index} src={certi.img} name={certi.name} />
                    ))
                )}
        </>
    );
}

export default CertificateCardList